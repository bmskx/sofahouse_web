const sql = require("../database/connection");
const logger = require("../../lib/logger/index");

// add new music
exports.create = async (music) => {
  music.status = true;
  music.created_at = Date.now();
  music.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(`INSERT INTO musics SET ?`, music);

    logger.info(
      `Inserted ${result.affectedRows} music >>> id: ${result.insertId}`
    );
    return { id: result.insertId, ...music };
  } catch (error) {
    // if query error
    logger.error(error);
  }
};

// update music by id
exports.update = async (music) => {
  music.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(
      `UPDATE musics SET ? WHERE id = ${music.id}`,
      music
    );

    logger.info(`Updated music >>> id: ${music.id}`);
  } catch (error) {
    // if query error
    logger.error(error);
  }
};

// get all musics
exports.getMusics = async (result) => {
  try {
    const [result, fields] = await sql.query(
      `SELECT id, title, artist, url, category FROM musics WHERE status = 1`
    );

    logger.info(`Selected ${result.length} music(s)`);
    return result;
  } catch (error) {
    // if query error
    logger.error(error);
  }
};