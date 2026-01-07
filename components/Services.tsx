
import React from 'react';
import { CreditCard, FileText, BookOpen, Monitor, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "명함 인쇄",
      icon: <CreditCard className="w-10 h-10" />,
      features: ["수입지 50종 이상", "레터프레스/엠보싱", "박/형압 특수가공"],
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "전단지 / 리플렛",
      icon: <FileText className="w-10 h-10" />,
      features: ["대량 옵셋 인쇄", "정밀한 접지 가공", "선명한 이미지 표현"],
      image: "https://images.unsplash.com/photo-1516383740770-fbcc5c247704?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "브로셔 / 카탈로그",
      icon: <BookOpen className="w-10 h-10" />,
      features: ["다양한 제본 방식", "브랜드 스토리텔링", "하이엔드 코팅 처리"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "포스터 / 배너",
      icon: <Monitor className="w-10 h-10" />,
      features: ["대형 특수 출력", "내구성 강한 소재", "압도적 시선 집중"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6">비즈니스 성장을 위한 최적의 프린팅 파트너</h3>
          <p className="text-slate-600 text-lg">기획 의도에 맞는 종이 선별부터 최종 검수까지, S&P의 모든 공정은 당신의 비즈니스가 돋보이도록 설계되었습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white flex items-center space-x-3">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="text-xl font-bold">{service.title}</h4>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-sm">
                      <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
