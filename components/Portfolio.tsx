
import React from 'react';
import { ExternalLink, Lightbulb, Puzzle } from 'lucide-react';

const Portfolio: React.FC = () => {
  const cases = [
    {
      category: "Branding & Paper Selection",
      title: "프리미엄 코스메틱 브랜드 'Luna' 패키징",
      challenge: "고급스러운 텍스처와 함께 환경을 생각하는 친환경 이미지를 동시에 구현해야 했습니다.",
      solution: "FSC 인증 비코팅지에 미세한 펄 박 가공을 결합하여, 손 끝에서 느껴지는 우아함과 지속 가능성을 동시에 담아냈습니다.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Technical Implementation",
      title: "IT 스타트업 'NEXA' 아이덴티티 명함",
      challenge: "수천 장의 명함이 오가는 컨퍼런스에서 브랜드의 차별성을 각인시켜야 했습니다.",
      solution: "일반 명함보다 2배 두꺼운 600g 합지에 측면 엣지 컬러링 기술을 적용하여, 시각과 촉각을 동시에 자극하는 독창적인 디자인을 완성했습니다.",
      image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Mass Production & QC",
      title: "아트 갤러리 '모먼트' 정기 카탈로그",
      challenge: "작가의 작품 색감을 왜곡 없이 그대로 종이 위에 구현하는 것이 가장 큰 과제였습니다.",
      solution: "고해상도 에칭(Etching) 인쇄와 실시간 색감 모니터링 시스템을 도입하여, 원화의 미세한 붓터치와 깊이감을 완벽하게 복원했습니다.",
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Case Studies</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-4">단순한 결과물이 아닌 솔루션의 기록</h3>
            <p className="text-slate-600 text-lg">우리는 고객이 직면한 문제를 인쇄 기술로 어떻게 해결했는지에 집중합니다.</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 border-b-2 border-slate-900 font-bold hover:text-blue-600 hover:border-blue-600 transition-all">
            <span>모든 사례 보기</span>
            <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <div key={index} className="group cursor-default">
              <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur shadow-sm rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                    <Puzzle size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase mb-1 tracking-widest">The Challenge</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.challenge}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Lightbulb size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-blue-400 uppercase mb-1 tracking-widest">The Solution</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
