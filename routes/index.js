import express from "express"
import pool from "../config/db.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk",
        { title: "Node js startrepo", message: "Använd det här repot som en grund för dina projekt." }
    )
})

router.get("/posts", async (req, res) => {
    const [rows] = await pool.query(`
        select * from Post
        `)
    res.json(rows)
})

router.get("/posttest", async (req, res) => {
    console.log(req)
    res.render("test.njk", {
        message: "tjena"
    })
})

router.get("/posttest", async (req, res) => {
    console.log(req)
    res.render("test.njk", {
        message: req.body.message
    })
})

router.get('/error', (req, res) => {
    throw new Error('Test error')
})

export default router