
import React from 'react';
import { ShieldCheck, Target, Layers, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "정밀한 품질 관리",
      desc: "첨단 자동 검수 시스템과 숙련된 전문가의 더블 체크를 통해 티끌 하나 없는 완벽한 결과물을 약속합니다."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "압도적 색감 정확도",
      desc: "디자인 단계의 팬톤 컬러가 종이 위에 그대로 재현되도록 미세한 잉크 분사량까지 조절합니다."
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "프리미엄 마감",
      desc: "단순한 재단이 아닌, 질감과 촉각까지 고려한 특수 후가공 기술로 브랜드의 품격을 완성합니다."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "고객 중심 경험",
      desc: "스타트업부터 대기업까지 각 비즈니스의 특성에 최적화된 맞춤형 지질과 가공 방식을 제안합니다."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-4">Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              인쇄는 단순 출력이 아니라<br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">브랜드의 첫인상</span>입니다
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              수천 통의 명함 중 하나일지라도, 누군가에겐 당신의 기업과 처음 만나는 순간입니다. 
              S&P는 그 찰나의 순간에 신뢰가 느껴질 수 있도록 보이지 않는 디테일까지 고집합니다. 
              품질은 타협의 대상이 아닙니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className="group p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">{v.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Printing Process" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-10">
                <p className="text-white text-2xl font-bold leading-tight">
                  "우리는 단순한 종이가 아닌,<br /> 비즈니스의 신뢰를 인쇄합니다."
                </p>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-200 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
