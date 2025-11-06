"use client"

import { useState, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { Resonator, calculateStat } from "@/app/types/resonator"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function LevelSlider({ resonator }: { resonator: Resonator }) {
  const [level, setLevel] = useState([1]);
  const currentLevel = level[0];

  const currentHP = useMemo(() => {
    return calculateStat(resonator.stats.hp, currentLevel);
  }, [currentLevel, resonator.stats.hp]);

  const currentATK = useMemo(() => {
    return calculateStat(resonator.stats.atk, currentLevel);
  }, [currentLevel, resonator.stats.atk]);

  const currentDEF = useMemo(() => {
    return calculateStat(resonator.stats.def, currentLevel);
  }, [currentLevel, resonator.stats.def])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span>Level</span>
          <span>{level[0]}</span>
        </div>

        <Slider
          value={level}
          onValueChange={setLevel}
          min={1}
          max={90}
          step={1}
        />
      </div>

      <Table>
        <TableBody>
          {/* HP */}
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_hp.png"
                width={20}
                alt="HP"
              />
              HP
            </TableCell>
            <TableCell className="font-medium">{currentHP.toLocaleString()}</TableCell>
          </TableRow>

          {/* ATK*/}
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_atk.png"
                width={20}
                alt="ATK"
              />
              ATK
            </TableCell>
            <TableCell className="font-medium">{currentATK.toLocaleString()}</TableCell>
          </TableRow>

          {/* DEF */}
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_def.png"
                width={20}
                alt="DEF"
              />
              DEF
            </TableCell>
            <TableCell className="font-medium">{currentDEF.toLocaleString()}</TableCell>
          </TableRow>

          {/* Energy Regen */}
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_energy.png"
                width={20}
                alt="Energy Regen"
              />
              Energy Regen
            </TableCell>
            <TableCell className="font-medium">100%</TableCell>
          </TableRow>

          {/* Crit. Rate */}
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_cr.png"
                width={20}
                alt="Crit. Rate"
              />
              Crit. Rate
            </TableCell>
            <TableCell className="font-medium">5%</TableCell>
          </TableRow>

          <TableRow className="flex justify-between">
            <TableCell className="flex items-center gap-2 font-bold">
              <img
                src="/assets/stats/stat_cd.png"
                width={20}
                alt="Crit. DMG"
              />
              Crit. DMG
            </TableCell>
            <TableCell className="font-medium">150%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
