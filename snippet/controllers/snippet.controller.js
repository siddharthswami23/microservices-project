const Snippet = require("../models/snippet.model");

const CreateSnippet = async (req, res) => {
    const { title, code, comments, createdAt } = req.body;

    try {
        const newSnippet = Snippet.create({
            title,
            code,
            comments,
            createdAt
        })
        await newSnippet.save()
        res.status(201).json({
            success: true,
            message: "Snippet created successfully",
            snippet: newSnippet
        })

    } catch (error) {
        console.log(error);
    }
}

const getAllSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find({});
        res.status(200).json(snippets);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error });
    }
};

module.exports = { CreateSnippet,getAllSnippets }