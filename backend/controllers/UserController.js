import User from "../models/UserModels.js";
import argon2, { hash } from "argon2";

export const getUsers = async(req, res) => {
    try{
        const response = await User.findAll({
            attributes: ['uuid', 'name', 'email', 'role']
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            attribute: ['uuid', 'name', 'email', 'role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error){
        res.status(500).json({msg: error.message});
    }
};

export const createUser = async(req, res) => {
    const { name, email, password, confPassword, role } = req.body;
    if (password !== confPassword) return res.status(400).json({msg: "password and confirm password not matched"});

    const hashPassword = await argon2.hash(password);

    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        });

        res.status(200).json({
            msg: "User Created Successfully"
        });

    } catch (error) {
        res.status(400).json({
            msg: error.message
        });

    }
};

export const updateUser = async(req, res) => {
    const user = await User.findOne ({
        where: {
            uuid: req.params.id
        }
    });

    if (!user) return res.status(404).json({msg: "User Not Found"});

    const {name, email, password, confPassword, role} = req.body;
    let hashPassword;
    if (password === "" || password === null) {
        hashPassword = user.password
    } else {
        hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword) return res.status(400).json({
        msg: "password and confirm password do not match"
    });

    try {
        await User.update({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({
            msg: "User update succesfully"
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message
        });
    }
};

export const deleteUser = async(req, res) => {
    const user = await User.findOne ({
        where: {
            uuid: req.params.id
        }
    });
    if (!user) return res.status(404).json({
        msg: "User not Found"
    });

    try {
        await User.destroy({
            where: { 
                id: user.id
            }
        });
        res.status(200).json({
            msg: "User deleted succesfully"
        });
    } catch (error) {
        res.status(400).json({
            msg: error.message
        });
    }
};