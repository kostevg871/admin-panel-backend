import mongoose from "mongoose";

const OveralStatsSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      date: String,
      totalSale: Number,
      totalUnits: Number,
    },
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OveralStats = mongoose.model("OveralStats", OveralStatsSchema);
export default OveralStats;
