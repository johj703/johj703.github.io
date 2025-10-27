# Frontend Developer Portfolio

사용자 중심의 인터페이스 설계와 성능 최적화에 관심이 많은 프론트엔드 개발자입니다.
새로운 기술 학습과 코드 품질 개선을 통해 더 나은 웹 경험을 만들어가고 있습니다.

[Live Demo](https://johj703.github.io/) | [Contact](mailto:johj703@nate.com)

## 주요 기능

- **반응형 웹 디자인**: 모든 디바이스에서 최적화된 사용자 경험 제공
- **다크/라이트 모드**: 사용자 환경에 맞는 테마 전환 기능
- **스크롤 기반 네비게이션**: 현재 섹션에 따른 활성 링크 자동 표시
- **부드러운 섹션 전환**: 매끄러운 스크롤 애니메이션

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: GitHub Pages

## 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/johj703/jojh703.github.io.git

# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/                # App Router (Next.js 14)
├── components/         # 재사용 가능한 컴포넌트
│   ├── Header.tsx     # 네비게이션 헤더
│   ├── Hero.tsx       # 메인 히어로 섹션
│   └── ui/            # UI 컴포넌트
└── stores/            # Zustand 상태 관리
```

## 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 정적 파일 생성 (GitHub Pages용)
npm run export
```
