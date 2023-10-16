import { hashPassword } from "../helpers/authhelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        // validation
        if (!name) {
            return res.send({ error: "Name is required" })
        }
        if (!email) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!password) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!phone) {
            return res.send({ error: "Nmae is Required" })
        }
        if (!address) {
            return res.send({ error: "Nmae is Required" })
        }

        // check user
        const existinguser = await userModel.findOne({ email: email })

        // existing user
        if (existinguser) {
            return res.status(200).send({
                success: true,
                message: "Already Registerd please login",
            })
        }

        // regiter user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()

        res.status(201).send({
            success: true,
            message: "User Registerd successfully",
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}; 