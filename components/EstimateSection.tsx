
import React, { useState } from 'react';
import { Send, MessageSquare, Clock, Zap } from 'lucide-react';

const EstimateSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest mb-4">Request a Quote</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              복잡한 설명 없이도<br /> 괜찮습니다
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed mb-12">
              인쇄 용어가 생소하신가요? 걱정하지 마세요. <br className="hidden md:block" />
              전문 상담사가 당신의 아이디어를 구체적인 사양으로 변환해 드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <Clock className="text-blue-400 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">2시간 이내 빠른 회신</h4>
                  <p className="text-slate-500">영업 시간 기준, 가장 빠른 상담을 약속합니다.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <Zap className="text-blue-400 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">무료 샘플 및 종이 추천</h4>
                  <p className="text-slate-500">브랜드 아이덴티티에 맞는 최적의 재질을 제안합니다.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="text-blue-400 w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">1:1 전담 매니저 매칭</h4>
                  <p className="text-slate-500">기획부터 배송까지 한 명의 매니저가 책임집니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-green-600 w-10 h-10" />
                  </div>
                  <h4 className="text-slate-900 text-2xl font-black mb-2">신청이 완료되었습니다!</h4>
                  <p className="text-slate-500">전담 매니저가 확인 후 곧 연락 드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">성함 / 담당자명</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">연락처</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">문의 종류</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                      <option>명함 인쇄</option>
                      <option>전단지 / 리플렛</option>
                      <option>브로셔 / 카탈로그</option>
                      <option>포스터 / 배너</option>
                      <option>기타 특수 인쇄</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">문의 내용</label>
                    <textarea 
                      rows={4}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="제작하시려는 품목의 대략적인 수량이나 궁금한 점을 적어주세요."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95"
                  >
                    무료 견적 신청하기
                  </button>
                  <p className="text-center text-slate-400 text-xs">
                    제출 시 <span className="underline cursor-pointer">개인정보 처리방침</span>에 동의하게 됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
