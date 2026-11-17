import Task from '../models/tasks.model.js';

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        message: 'Title and description are required',
      });
    }
    const task = await Task.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      message: 'Task created',
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// export const getTaskProfile = async (req, res) => {
//   const task = await Task.find({ email: req.task.title });
//   res.json(task);
// };
