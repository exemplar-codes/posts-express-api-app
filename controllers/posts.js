const postsIndex = async (req, res, next) => {
  try {
    const posts = [];
    res.status(200).json({ data: posts, _message: "postsIndex" });
  } catch (error) {
    next(error);
  }
};

const postsShow = async (req, res, next) => {
  try {
    const post = null;
    res.status(200).json({ data: post, _message: "postsShow" });
  } catch (error) {
    next(error);
  }
};

const postsCreate = async (req, res, next) => {
  try {
    res.status(200).json({ data: post, _message: "postsShow" });
  } catch (error) {
    next(error);
  }
};

const postsUpdate = async (req, res, next) => {
  try {
    res.status(200).json({ data: req.body, _message: "postsUpdate" });
  } catch (error) {
    next(error);
  }
};

const postsDelete = async (req, res, next) => {
  try {
    res.status(200).json({ _message: "postsDelete" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postsIndex,
  postsShow,
  postsCreate,
  postsUpdate,
  postsDelete,
};
