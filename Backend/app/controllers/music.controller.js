const Music = require("../models/music.model");

// add new music
exports.add = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  const music = req.body.music;

  // check all information exists
  if (
    !music.hasOwnProperty("title") ||
    !music.hasOwnProperty("artist") ||
    !music.hasOwnProperty("duration") ||
    !music.hasOwnProperty("cover_url") ||
    !music.hasOwnProperty("music_url") ||
    !music.hasOwnProperty("cat_lyrics_song") ||
    !music.hasOwnProperty("cat_music_prod") ||
    !music.hasOwnProperty("cat_vocal_rec") ||
    !music.hasOwnProperty("cat_music_score") ||
    !music.hasOwnProperty("cat_mix_master") ||
    !music.hasOwnProperty("show_homepage")
  ) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  try {
    // add new music
    const result = await Music.create(music);

    // response the result
    return res.status(201).json({
      success: true,
      message: "Added new music successfully",
      id: result.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update music by id
exports.update = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  const music = req.body.music;

  // check music id exists
  if (!music.hasOwnProperty("id")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required music id",
    });
  }

  // avoid directly update music status
  if (music.hasOwnProperty("status")) {
    delete music.status;
  }

  try {
    // update music
    await Music.update(music);

    // response the result
    return res.status(200).json({
      success: true,
      message: "Updated music successfully",
      id: music.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete music by id
exports.delete = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }
  
  const music = req.body.music;

  // check music id exists
  if (!music.hasOwnProperty("id")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required music id",
    });
  }

  music.status = false;

  try {
    // update status
    await Music.update(music);

    // response the result
    return res.status(200).json({
      success: true,
      message: "Deleted music successfully",
      id: music.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all musics
exports.getMusics = async (req, res) => {
  try {
    // get data
    const result = await Music.getMusics();

    // response the result
    return res.status(200).json(result);
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

