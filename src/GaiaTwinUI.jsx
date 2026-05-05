import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Leaf,
  TreePine,
  Recycle,
  Droplets,
  Award,
  Sparkles,
  ShieldCheck,
  Flame,
  Trophy,
  Star,
  Wind,
} from "lucide-react";

const ecoStats = [
  {
    label: "Trees Planted",
    value: 128,
    unit: "trees",
    icon: <TreePine className="h-5 w-5 text-emerald-300" />,
    trend: "+12 this month",
  },
  {
    label: "CO₂ Reduced",
    value: 742,
    unit: "kg",
    icon: <Wind className="h-5 w-5 text-teal-300" />,
    trend: "-18% footprint",
  },
  {
    label: "Water Saved",
    value: 9200,
    unit: "L",
    icon: <Droplets className="h-5 w-5 text-cyan-300" />,
    trend: "+640L this week",
  },
  {
    label: "Eco Points",
    value: 320,
    unit: "pts",
    icon: <Award className="h-5 w-5 text-lime-300" />,
    trend: "Level 5 Guardian",
  },
];

const tasks = [
  {
    title: "Plant a Tree",
    points: 50,
    progress: 40,
    icon: <TreePine className="h-6 w-6 text-emerald-300" />,
  },
  {
    title: "Recycle Waste",
    points: 30,
    progress: 70,
    icon: <Recycle className="h-6 w-6 text-teal-300" />,
  },
  {
    title: "Save Water",
    points: 20,
    progress: 60,
    icon: <Droplets className="h-6 w-6 text-cyan-300" />,
  },
  {
    title: "Reduce Carbon Footprint",
    points: 80,
    progress: 25,
    icon: <Leaf className="h-6 w-6 text-lime-300" />,
  },
];

const badges = [
  {
    title: "Seed Starter",
    requirement: "Plant 25 trees",
    icon: <Sparkles className="h-5 w-5" />,
    unlocked: true,
  },
  {
    title: "Carbon Shield",
    requirement: "Cut 500kg CO₂",
    icon: <ShieldCheck className="h-5 w-5" />,
    unlocked: true,
  },
  {
    title: "Water Saver",
    requirement: "Save 5,000L water",
    icon: <Droplets className="h-5 w-5" />,
    unlocked: true,
  },
  {
    title: "Eco Streak",
    requirement: "30-day task streak",
    icon: <Flame className="h-5 w-5" />,
    unlocked: false,
  },
  {
    title: "Planet Hero",
    requirement: "Earn 500 points",
    icon: <Trophy className="h-5 w-5" />,
    unlocked: false,
  },
  {
    title: "Gaia Legend",
    requirement: "Unlock all badges",
    icon: <Star className="h-5 w-5" />,
    unlocked: false,
  },
];

export default function GaiaTwinUI() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#154b32_0%,_#062c2f_30%,_#020617_70%,_#000_100%)] text-white p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              🌍 GaiaTwin Dashboard
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/80 mt-1">
              Real-time sustainability progress for a greener future.
            </p>
          </div>
          <Button className="bg-emerald-500/80 hover:bg-emerald-400 text-emerald-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Sync Impact Data
          </Button>
        </header>

        <section className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {ecoStats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 backdrop-blur-xl shadow-[inset_0_0_24px_rgba(16,185,129,0.08)]"
            >
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-emerald-100/80">
                    {stat.label}
                  </p>
                  <div className="rounded-full bg-emerald-300/10 border border-emerald-200/20 p-2">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-50">
                  {stat.value.toLocaleString()} <span className="text-lg">{stat.unit}</span>
                </p>
                <p className="text-xs sm:text-sm text-emerald-200/80 mt-2">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid xl:grid-cols-3 gap-4 sm:gap-6">
          <div className="xl:col-span-2 space-y-4 sm:space-y-6">
            <Card className="rounded-2xl border border-emerald-300/20 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Sustainability Missions</h2>
                  <span className="text-xs sm:text-sm text-emerald-200/80">Weekly goals</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {tasks.map((task) => (
                    <Card
                      key={task.title}
                      className="rounded-xl border border-emerald-300/20 bg-emerald-300/5"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-emerald-300/10 border border-emerald-200/20 p-2">
                              {task.icon}
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base">{task.title}</h3>
                          </div>
                          <span className="text-emerald-300 text-sm">+{task.points}</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs sm:text-sm text-emerald-100/75">
                            {task.progress}% complete
                          </span>
                          <Button
                            size="sm"
                            className="bg-emerald-500/80 hover:bg-emerald-400 text-emerald-950"
                          >
                            Complete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-emerald-300/20 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Explore & Learn</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Urban Gardening", "Renewable Energy", "Green Transport"].map((topic) => (
                    <Card key={topic} className="rounded-xl border border-emerald-300/20 bg-emerald-300/5">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-emerald-50">{topic}</h3>
                        <p className="text-sm mt-2 text-emerald-100/80">
                          Discover practical actions and measurable outcomes for your city.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border border-emerald-300/20 bg-white/5 backdrop-blur-xl h-fit">
            <CardContent className="p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Rewards & Badges</h2>
              <div className="space-y-3">
                {badges.map((badge) => (
                  <div
                    key={badge.title}
                    className={`rounded-xl border p-3 flex items-center gap-3 ${
                      badge.unlocked
                        ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
                        : "border-slate-500/30 bg-slate-400/5 text-slate-300"
                    }`}
                  >
                    <div
                      className={`rounded-lg p-2 ${
                        badge.unlocked ? "bg-emerald-400/20" : "bg-slate-400/20"
                      }`}
                    >
                      {badge.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{badge.title}</p>
                      <p className="text-xs opacity-80">{badge.requirement}</p>
                    </div>
                    <span
                      className={`ml-auto text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                        badge.unlocked
                          ? "bg-emerald-500/30 text-emerald-100"
                          : "bg-slate-500/30 text-slate-200"
                      }`}
                    >
                      {badge.unlocked ? "Unlocked" : "Locked"}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
