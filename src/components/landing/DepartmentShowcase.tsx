import React from 'react';
import { 
  Building2, 
  Cpu, 
  BookOpen, 
  Vote, 
  Bus, 
  Binary, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const DepartmentShowcase: React.FC<{ onNavigateToCategory: (category: string) => void }> = ({
  onNavigateToCategory,
}) => {
  const departments = [
    {
      name: 'Computer Science Society',
      category: 'Computer Science',
      icon: Binary,
      bountiesCount: 3,
      avgPayout: '$65 USD',
      desc: 'Hackathon portals, contest judge bots, member auth APIs',
    },
    {
      name: 'AI & Robotics Institute',
      category: 'AI & Research',
      icon: Cpu,
      bountiesCount: 2,
      avgPayout: '$90 USD',
      desc: 'GPU cluster telemetries, ROS2 sensor calibrations, dataset cleaners',
    },
    {
      name: 'University Registrar',
      category: 'Administration',
      icon: BookOpen,
      bountiesCount: 2,
      avgPayout: '$200 Gift Card',
      desc: 'Syllabus OCR scrapers, schedule sanitizers, grade audit scripts',
    },
    {
      name: 'Student Union Governance',
      category: 'Student Affairs',
      icon: Vote,
      bountiesCount: 2,
      avgPayout: '$70 USD',
      desc: 'Ballot security hardening, club treasury trackers, event forms',
    },
    {
      name: 'Campus Library Systems',
      category: 'Administration',
      icon: Building2,
      bountiesCount: 1,
      avgPayout: '$60 USD',
      desc: 'RFID scanner daemons, book hold SMS hooks, archive indexers',
    },
    {
      name: 'Transportation Services',
      category: 'Engineering',
      icon: Bus,
      bountiesCount: 1,
      avgPayout: '$45 USD',
      desc: 'Live shuttle GPS interpolation, route delay monitors',
    },
  ];

  return (
    <section className="py-20 border-t border-white/[0.06] bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-gold-400 uppercase tracking-wider mb-2">
              University Ecosystem
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enrolled Campus Departments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Departments post targeted 2-5h micro-tasks directly with pre-allocated cash budgets or student gift-card rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.name}
                onClick={() => onNavigateToCategory(dept.category)}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-gold-500/40 cursor-pointer group space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/10 group-hover:border-gold-400/40 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                    {dept.bountiesCount} active bounties
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-gold-200 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Avg Escrow: <span className="text-gold-300 font-bold">{dept.avgPayout}</span></span>
                  <span className="text-zinc-400 group-hover:text-gold-400 transition-colors flex items-center gap-1">
                    View tasks <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
