// 개인 정보 설정 파일
// 이 파일의 정보를 수정하면 웹페이지가 자동으로 업데이트됩니다.

const userConfig = {
    // 기본 정보
    name: "우태규",
    englishName: "Tae-Gyu Woo",
    title: "석사과정 / 연구원",
    department: "연세대학교 전산학과 뉴로로보틱스 연구실",
    email: "taegyu@yonsei.ac.kr",
    github: "https://github.com/wtaegyu",
    linkedin: "https://linkedin.com/in/wtaegyu",
    profileImage: "profile.jpg", // 프로필 사진 파일명 (images 폴더에 저장)
    
    // 소개
    introduction: {
        korean: "SLAM과 로보틱스 연구원입니다.",
        english: "SLAM & Robotics Researcher",
        description: "I am a graduate student at Yonsei University, focusing on SLAM technology and autonomous robotics research."
    },
    
    // 관심 분야
    interests: [
        "SLAM (Simultaneous Localization and Mapping)",
        "자율주행 로봇",
        "센서 융합",
        "컴퓨터 비전",
        "로보틱스",
        "인공지능",
        "실시간 시스템"
    ],
    
    // 기술 스택
    skills: [
        "C++",
        "Python", 
        "ROS",
        "SLAM",
        "OpenCV",
        "PCL",
        "Git",
        "Linux"
    ],
    
    // 수강 과목
    courses: {
        undergraduate: [
            "인공지능 (2020-2)",
            "데이터 마이닝 (2020-2)", 
            "수치 해석 (2021-2)",
            "디지털 신호처리 (2021-2)",
            "자료구조 (2020-1)",
            "알고리즘 (2020-2)"
        ],
        graduate: [
            "최적화 이론 (2021-1)",
            "시뮬레이션 현실화 기초 (2021-2)",
            "고급 로보틱스 (2022-1)",
            "컴퓨터 비전 (2022-1)"
        ],
        other: [
            "다이로스 부트캠프 1 (2020.7.8)",
            "다이로스 부트캠프 2 (2020.8.10)",
            "NVIDIA GTC - 트랜스포머 기반 자연어 처리 애플리케이션 구축 (2021.11.8)",
            "ROS 기초 워크샵 (2021.3.15)",
            "SLAM 알고리즘 심화 과정 (2022.6.20)"
        ]
    },
    
    // 프로젝트
    projects: [
        {
            title: "SLAM 기반 자율주행 로봇",
            description: "ROS와 SLAM 알고리즘을 활용한 자율주행 로봇 개발 프로젝트입니다.",
            icon: "🤖",
            demo: "#",
            github: "#"
        },
        {
            title: "실내 환경 매핑 시스템", 
            description: "LiDAR 센서를 활용한 실내 환경 매핑 및 경로 계획 시스템입니다.",
            icon: "🗺️",
            demo: "#",
            github: "#"
        },
        {
            title: "센서 융합 기반 위치 추정",
            description: "IMU, GPS, 카메라 센서를 융합한 정밀 위치 추정 시스템입니다.",
            icon: "📊",
            demo: "#",
            github: "#"
        }
    ],
    
    // 연락처 정보
    contact: {
        address: "26493, 강원도 원주시 흥업면 연세대길 1",
        phone: "(033) 760-2975",
        email: "taegyu@yonsei.ac.kr"
    },
    
    // 미디어 (동영상, 유튜브 등)
    media: [
        {
            title: "SLAM 로봇 시연",
            description: "실내 환경에서 SLAM 알고리즘을 활용한 로봇의 자율주행 시연",
            type: "youtube", // "youtube", "video", "image"
            url: "https://www.youtube.com/watch?v=example",
            thumbnail: "images/robot-demo.jpg",
            duration: "2:30"
        },
        {
            title: "센서 융합 실험",
            description: "IMU, GPS, 카메라 센서를 융합한 위치 추정 실험 영상",
            type: "video",
            url: "videos/sensor-fusion.mp4",
            thumbnail: "images/sensor-demo.jpg",
            duration: "1:45"
        },
        {
            title: "로봇 제어 시스템",
            description: "ROS 기반 로봇 제어 시스템의 동작 과정",
            type: "youtube",
            url: "https://www.youtube.com/watch?v=example2",
            thumbnail: "images/control-system.jpg",
            duration: "3:15"
        }
    ],
    
    // 자동 설정 (수정 불필요)
    autoSettings: {
        // 연도는 자동으로 현재 연도로 설정됩니다
        // 수동으로 설정하려면 아래 주석을 해제하고 원하는 연도를 입력하세요
        // year: 2025
    }
};

// 설정을 전역으로 내보내기
window.userConfig = userConfig; 