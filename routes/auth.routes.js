const express = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("./models/User");
const router = express.Router();

router.post(
	"/register",
	[
		check("login", "Введите корректный логин").isEmail(),
		check(
			"password",
			"Пароль должен содержать минимум 5 символов"
		).isLength({ min: 5 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Некорректные данные",
				});
			}

			console.log(req);

			const { login, password } = req.body;
			const candidate = await findOne({ login });

			if (candidate) {
				return res
					.status(400)
					.json({ message: "Пользователь существует" });
			}

			const hashPass = await hash(password, 12);

			const user = new User({ login, password: hashPass });

			await user.save();

			return res.status(201).json({ message: "Пользователь создан" });
		} catch (e) {
			return res.status(500).json({ message: "Что-то пошло не так" });
		}
	}
);

router.post(
	"/login",
	[
		check("login", "Введите корректный логин.").normalizeEmail().isEmail(),
		check(
			"password",
			"Пароль должен содержать минимум 5 символов."
		).isLength({ min: 5 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Некорректные данные.",
				});
			}

			const { login, password } = req.body;

			const user = await findOne({ login });

			if (!user) {
				return res.status(400).json({
					message: `Пользователь ${login} не существует.`,
				});
			}

			const isMatch = await compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({
					message: `Неверный пароль.`,
				});
			}

			const token = jwt.sign({ userId: user.id }, get("jwtSecret"), {
				expiresIn: "1h",
			});

			return res.json({ token, userId: user.id });
		} catch (e) {
			return res.status(500).json({ message: "Что-то пошло не так" });
		}
	}
);

module.exports = router;
