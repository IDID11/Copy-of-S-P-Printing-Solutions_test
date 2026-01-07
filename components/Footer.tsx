
import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Printer className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">S&P</span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8">
              당신의 아이디어를 가장 선명한 현실로.<br />
              S&P는 비즈니스의 첫인상을 완성하는 프리미엄 프린팅 파트너입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-8">Quick Links</h5>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 transition-colors">회사 소개</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 transition-colors">서비스 안내</Link></li>
              <li><Link to="/portfolio" className="text-slate-500 hover:text-blue-600 transition-colors">작업 사례</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">실시간 견적</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-8">Contact Info</h5>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-slate-900 font-bold text-sm">고객센터</p>
                  <p className="text-slate-500">1588-0000</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-slate-900 font-bold text-sm">이메일 문의</p>
                  <p className="text-slate-500">estimate@snp-print.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-slate-900 font-bold text-sm">오시는 길</p>
                  <p className="text-slate-500">서울특별시 성동구 아차산로 123 S&P 빌딩</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 font-bold mb-8">Newsletter</h5>
            <p className="text-slate-500 text-sm mb-6">최신 프린팅 트렌드와 새로운 종이 입고 소식을 받아보세요.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-5 py-3 bg-slate-50 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all">구독하기</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© 2024 S&P Printing Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-900 transition-colors font-bold text-slate-600">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-900 transition-colors">사업자정보확인</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
