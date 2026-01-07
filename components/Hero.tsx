
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Desktop-only Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <iframe 
          src='https://my.spline.design/boxeshover-V4vqjikBRV5hiTPC0Y9ZUZTT/' 
          frameBorder='0' 
          width='100%' 
          height='100%' 
          className="w-full h-full scale-110 opacity-60"
        ></iframe>
      </div>

      {/* Mobile-only background pattern */}
      <div className="absolute inset-0 md:hidden z-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl -ml-20 -mb-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full mb-8 border border-slate-200">
            <CheckCircle className="text-blue-600 w-4 h-4" />
            <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Premium Print Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight mb-8">
            당신의 아이디어를<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              가장 선명한 현실
            </span>로
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            명함부터 대량 인쇄까지, S&P의 정밀한 프린팅 솔루션은<br className="hidden md:block" />
            단순한 출력을 넘어 브랜드의 가치를 시각적으로 증명합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/contact"
              className="px-10 py-5 bg-slate-900 text-white rounded-full text-lg font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl flex items-center space-x-3 group"
            >
              <span>무료 견적 상담 시작하기</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-full text-lg font-bold hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              작업 사례 보기
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10">
            <div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Precision</p>
              <p className="text-slate-900 text-xl font-black">0.01mm 오차</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Accuracy</p>
              <p className="text-slate-900 text-xl font-black">99% 색재현율</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Client</p>
              <p className="text-slate-900 text-xl font-black">2,500+ 기업</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Support</p>
              <p className="text-slate-900 text-xl font-black">24h 견적 대응</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
