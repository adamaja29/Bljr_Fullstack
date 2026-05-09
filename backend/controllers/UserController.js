import User from "../models/UserModels.js";
import argon2 from "argon2";

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

export const getUserById = () => {};

export const createUser = async(req, res) => {
    const { name, email, password, role } = req.body;
    const hashPassword = await argon2.hash(password);

    try {

        await User.create({
            name: name,
            email: email,
            password: password,
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
}

export const updateUser = () => {};

export const deleteUser = () => {};