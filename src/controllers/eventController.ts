import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getEvents = async (
  req: Request,
  res: Response
) => {
  try {
    const events =
      await prisma.telemetryEvent.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 10,
      });

    res.status(200).json(events);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
    });
  }
};