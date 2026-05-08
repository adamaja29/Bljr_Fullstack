import User from "../models/UserModels.js";
import argon2 from "argon2";

export const getUsers = (req, res) => {
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

export const createUser = (req, res) => {
    try{
        const response = await User.findOne({
            attributes: ['uuid', 'name', 'email', 'role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

export const updateUser = () => {};

export const deleteUser = () => {};