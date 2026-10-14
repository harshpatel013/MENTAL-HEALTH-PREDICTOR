import { useEffect, useState } from "react";
import {
  Moon,
  Smartphone,
  BookOpen,
  Activity,
  ArrowRight,
  Brain,
} from "lucide-react";

import DashboardLayout from "../layouts/dashboardlayout";

function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const stats = [
    {
      title: "Wellness Score",
      value: "--",
      suffix: "/ 10",
      icon: Brain,
    },
    {
      title: "Sleep",
      value: "--",
      suffix: " hrs",
      icon: Moon,
    },
    {
      title: "Screen Usage",
      value: "--",
      suffix: " hrs",
      icon: Smartphone,
    },
    {
      title: "Study Time",
      value: "--",
      suffix: " hrs",
      icon: BookOpen,
    },
    {
      title: "Physical Activity",
      value: "--",
      suffix: " hrs",
      icon: Activity,
    },
  ];

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <section>
          <p className="text-sm font-medium text-emerald-600">
            Your wellness overview
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Welcome, {currentUser?.name || "there"}!
          </h1>

          <p className="mt-2 text-slate-500">
            Here's an overview of your current wellness patterns.
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <Icon size={21} />
                  </div>
                </div>

                <p className="mt-5 text-sm text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {stat.value}

                  <span className="ml-1 text-sm font-medium text-slate-400">
                    {stat.suffix}
                  </span>
                </p>

                {/* Wellness score status */}
                {stat.title === "Wellness Score" && (
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    Complete an assessment to see your score
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Assessment CTA + Daily Balance */}
        <section className="grid gap-6 lg:grid-cols-3">

          {/* Assessment */}
          <div className="rounded-2xl bg-emerald-600 p-7 text-white lg:col-span-2">
            <div className="flex h-full flex-col justify-between">

              <div>
                <div className="mb-4 inline-flex rounded-xl bg-white/15 p-3">
                  <Brain size={24} />
                </div>

                <h2 className="text-2xl font-bold">
                  Check in with yourself
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-50">
                  Complete a short assessment based on your daily
                  habits, sleep, study routine, physical activity,
                  and digital usage.
                </p>
              </div>

              <a
                href="/assessment"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Start assessment
                <ArrowRight size={17} />
              </a>

            </div>
          </div>

          {/* Daily Balance */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Activity size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Daily balance
                </h3>

                <p className="text-xs text-slate-500">
                  Your activity snapshot
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">

              {/* Physical Activity */}
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-600">
                    Physical activity
                  </span>

                  <span className="font-medium text-slate-400">
                    --
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>

              {/* Sleep */}
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-600">
                    Sleep
                  </span>

                  <span className="font-medium text-slate-400">
                    --
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>

              {/* Study */}
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-600">
                    Study
                  </span>

                  <span className="font-medium text-slate-400">
                    --
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-violet-500"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;