import OveralStats from "../models/OveralStat";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OveralStats.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
