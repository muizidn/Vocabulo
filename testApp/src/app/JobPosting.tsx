import React from 'react';

const JobPosting: React.FC = () => {
  return (
    <div className="">
        <h1 className="text-2xl font-semibold mb-4">Software Engineer - Frontend</h1>
        <p className="mb-6">
          라이너 채용 공고에 오신 걸 환영합니다!
        </p>
        <p className="mb-4">
          라이너는 글로벌 <span>1,000만 MAU</span>, 픽사와 트위터 창업자도 사용하는 하이라이트 기반 정보 탐색 플랫폼입니다.
        </p>
        <p className="mb-4">
          하이라이트 데이터를 통해 라이너는 ‘지금 현시점에, 사람들이 인터넷에서 가장 중요하다고 생각하는 정보’가 무엇인지 파악하고, 이제는 이렇게 누적되는 하이라이트 데이터(사람의 힘) + 인공지능(기계의 힘)을 함께 사용해 ‘초개인화된 정보 탐색 혁신’을 이루고자 합니다.
        </p>
        <ul className="list-decimal list-inside mb-4">
          <li>1,000만 MAU</li>
          <li>해외 유저 비율 95%</li>
          <li>연 20배씩 성장하는 스타트업</li>
        </ul>
        <p className="mb-4">
          라이너의 제품 숫자보다 더 대단한건, 이런 글로벌 서비스를 30명이 만들어가고 있다는 것입니다.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
          <p className="italic">
            수잔 워치츠키
          </p>
          <p>
            마리사 메이어
          </p>
        </blockquote>
        <p className="mb-4">
          `구글의 핵심 멤버는 “20~30번째”로 합류한 사람들이 가장 많습니다.`
        </p>
        <p className="mb-4">
          “검색 = 구글”이 당연한 세상에서 검색 시장을 다시 한번 혁신하고자 하는,
        </p>
        <p className="mb-4">
          보통 사람들이 생각하기에는 ‘미친 생각’인 위대한 도전에 가슴 뛰신다면,
        </p>
        <p className="mb-4">
          지금 바로 라이너의 30번째 멤버로 합류하세요! 🚀
        </p>
        <h2 className="text-lg font-semibold mb-4">라이너팀의 Software Engineer는 어떤 사람들인가요?</h2>
        <p className="mb-4">
          사용자에게 가치를 주는 제품을 제대로 만들고 제때에 전하는 것에 집중합니다. 서로의 믿음과 격려 속에서 필요한 역량을 키우고, 내 손과 머리로 세상을 바꾸기 위해 유기적으로 협업합니다. 훌륭한 제품을 통해 일에 대한 자부심과 즐거움을 느낍니다.
        </p>
        <p className="mb-4">
          “제품이 사용자에게 줄 효용을 먼저 생각하고, 꾸준하고 신속하게 가치를 더해갈 방법을 고민합니다. 이 과정 속에서 유기적으로 상호작용하며 함께 성장합니다.” 라이너 개발 문화 소개
        </p>
        <h2 className="text-lg font-semibold mb-4">이런 분을 찾습니다!</h2>
        <ul className="list-disc list-inside">
          <li>메이커로서 사용자에게 어떤 가치를 줄 수 있을지 관심이 많으신 분</li>
          <li>기술적 탁월함을 추구하고 이를 공유하며 같이 성장하는 것을 즐기시는 분</li>
          <li>경계 없이 팀의 다양한 동료들과 소통하며 맡은 바 책임을 다해 탁월하게 이루어내시는 분</li>
        </ul>
      </div>
  );
};

export default JobPosting;
