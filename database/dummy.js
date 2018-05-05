var user = [
    {
        user_id : "pepsi",
        auth : "0",
        name : "페엡시",
        age : 30,
        region : "부르나이",
        introduction : "주인공은 펩시",
        email : "pepsi@gmail.com",
        phone : "01084840309",
        profile_img : "pepsi_profile.png",
        thumbnail : "pepsi_thumbnail.png"
    },
    {
        user_id : "coca",
        auth : "1",
        name : "코옥카",
        age : 32,
        region : "모잠비크",
        introduction : "펩시보다 맛없는 코카콜라",
        email : "coca@gmail.com",
        phone : "01047394747",
        profile_img : "coca_profile.png",
        thumbnail : "coca_thumbnail.png"
    },
    {
        user_id : "apple",
        auth : "0",
        name : "애앱뿔",
        age :700,
        region : "미국",
        introduction : "스파클링 미닛 메이드 애플",
        email : "apple@gmail.com",
        phone : "01048395384",
        profile_img : "apple_profile.png",
        thumbnail : "apple_thumbnail.png"
    },
    {
        user_id : "samsung",
        auth : "1",
        name : "새앰성",
        age :24,
        region : "한국",
        introduction : "가디언즈 오브 갤럭시 팬",
        email : "samsung@gmail.com",
        phone : "01039478302",
        profile_img : "samsung_profile.png",
        thumbnail : "samsung_thumbnail.png"
    },
    {
        user_id : "toyota",
        auth : "1",
        name : "토요탕",
        age :26,
        region : "몰디브",
        introduction : "왓따시와 뵤잉데스",
        email : "toyota@gmail.com",
        phone : "01039478302",
        profile_img : "toyota_profile.png",
        thumbnail : "toyota_thumbnail.png"
    },
    {
        user_id : "hyundai",
        auth : "0",
        name : "휸다이",
        age :28,
        region : "소말리아",
        introduction : "휸다이 아니다해 현대다헤",
        email : "hyundai@gmail.com",
        phone : "01039478302",
        profile_img : "hyundai_profile.png",
        thumbnail : "hyundai_thumbnail.png"
    },
    {
        user_id : "benz",
        auth : "1",
        name : "멀시디즈",
        age :34,
        region : "파푸아뉴기니",
        introduction : "안녕하세요 님들 밴쯔입니다",
        email : "benz@gmail.com",
        phone : "03093828394",
        profile_img : "benz_profile.png",
        thumbnail : "benz_thumbnail.png"
    }
]

var auth = {
    mentor = 0,
    normal = 1
}

var region = {
    seoul = 0,
    busan = 1,
    daegu = 2,
    incheon = 3,
    gwangju = 4,
    daejeon = 5,
    ulsan = 6,
    sejong = 7,
    gyeonggi = 8,
    gangwon = 9,
    choongbuk = 10,
    choongnam = 11,
    jeonbuk = 12,
    jeonnam = 13,
    gyeongbuk = 14,
    gyeongnam = 15,
    jeju = 16
}

var interest = [
    {
        user_id : "pepsi",
        businesss : 0,
        planning : 0,
        marketing : 1,
        r_d : 1,
        public_company : 0,
        language : 0,
        certificate : 0
    },
    {
        user_id : "coca",
        businesss : 1,
        planning : 1,
        marketing : 0,
        r_d : 1,
        public_company : 0,
        language : 0,
        certificate : 1
    },
    {
        user_id : "apple",
        businesss : 1,
        planning : 0,
        marketing : 1,
        r_d : 0,
        public_company : 1,
        language : 1,
        certificate : 0
    },
    {
        user_id : "samsung",
        businesss : 1,
        planning : 1,
        marketing : 1,
        r_d : 1,
        public_company : 1,
        language : 1,
        certificate : 1
    },
    {
        user_id : "toyota",
        businesss : 1,
        planning : 1,
        marketing : 1,
        r_d : 1,
        public_company : 0,
        language : 1,
        certificate : 0
    },
    {
        user_id : "hyundai",
        businesss : 1,
        planning : 1,
        marketing : 1,
        r_d : 1,
        public_company : 1,
        language : 1,
        certificate : 0
    },
    {
        user_id : "benz",
        businesss : 1,
        planning : 1,
        marketing : 1,
        r_d : 1,
        public_company : 1,
        language : 1,
        certificate : 0
    }
]

var favorite_study = [
    {
        user_id : "pepsi",
        study_id : 0
    },
    {
        user_id : "pepsi",
        study_id : 1
    },
    {
        user_id : "pepsi",
        study_id : 2
    },
    {
        user_id : "coca",
        study_id : 0
    },
    {
        user_id : "coca",
        study_id : 1
    },
    {
        user_id : "samsung",
        study_id : 0
    },
    {
        user_id : "samsung",
        study_id : 1
    },
    {
        user_id : "samsung",
        study_id : 2
    },
    {
        user_id : "samsung",
        study_id : 2
    },
    {
        user_id : "toyota",
        study_id : 0
    },
    {
        user_id : "toyota",
        study_id : 1
    },
    {
        user_id : "toyota",
        study_id : 2
    }
]

var black_user = [
    {
        user_id : "pepsi",
        black_id : "coca"
    },
    {
        user_id : "pepsi",
        black_id : "samsung"
    },
    {
        user_id : "pepsi",
        black_id : "hyundai"
    },
    {
        user_id : "hyundai",
        black_id : "coca"
    },
    {
        user_id : "hyundai",
        black_id : "benz"
    }
]


var my_study = [
    {
        user_id : "pepsi",
        study_id : 0,
        status : 0,
        auth : 0
    },
    {
        user_id : "pepsi",
        study_id : 1,
        status : 1,
        auth : 1
    },
    {
        user_id : "pepsi",
        study_id : 2,
        status : 2,
        auth : 0
    }
]

var my_study_stats = {
    arranged_invited : 0,
    arranged_register : 1,
    arranged_participate : 2,
    rejected : 3,
    updated : 4,
    deleted : 5,
    ongoing : 6,
    completed : 7
}

var exposure_status = [
    {
        user_id : "pepsi",
        age : 1,
        region : 1,
        introduction : 1,
        career : 1,
        interest : 1,
        email : 1,
        phone : 1,
        social_id : 1,
        profile_img : 1,
        thumbnail : 1
    },
    {
        user_id : "coca",
        age : 1,
        region : 1,
        introduction : 1,
        career : 1,
        interest : 1,
        email : 1,
        phone : 1,
        social_id : 1,
        profile_img : 1,
        thumbnail : 1
    },
    {
        user_id : "apple",
        age : 1,
        region : 1,
        introduction : 1,
        career : 1,
        interest : 1,
        email : 1,
        phone : 1,
        social_id : 1,
        profile_img : 1,
        thumbnail : 1
    },
    {
        user_id : "samsung",
        age : 1,
        region : 1,
        introduction : 1,
        career : 1,
        interest : 1,
        email : 1,
        phone : 1,
        social_id : 1,
        profile_img : 1,
        thumbnail : 1
    },
    {
        user_id : "toyota",
        age : 1,
        region : 1,
        introduction : 1,
        career : 1,
        interest : 1,
        email : 1,
        phone : 1,
        social_id : 1,
        profile_img : 1,
        thumbnail : 1
    },
    {
        user_id : "hyundai",
        age : 0,
        region : 0,
        introduction : 0,
        career : 0,
        interest : 0,
        email : 0,
        phone : 0,
        social_id : 0,
        profile_img : 0,
        thumbnail : 0
    },
    {
        user_id : "benz",
        age : 0,
        region : 0,
        introduction : 0,
        career : 0,
        interest : 0,
        email : 0,
        phone : 0,
        social_id : 0,
        profile_img : 0,
        thumbnail : 0
    }
]

var exposure_type = {
    hide : 0,
    expose : 1
}

var review = [
    {
        user_id : "pepsi",
        review_id : "coca",
        study_id : 0,
        ratings : 4.5,
        comment : "역시 코카콜라"
    }
]

var career = [
    {
        user_id : "pepsi",
        degree : "대졸",
        major : "산디",
        job : "프리",
        description : "경력"
    }
]



var study = [
    {
        study_id : 0,
        director_id : "samsung",
        name : "토플 110점 스피킹 스터디",
        reg_date : 203204924,
        update_date : 0,
        start_date : 29483498,
        duration : 4,
        end_date : 209489384,
        region : 0,
        category : 5,
        description : "영어 잘하시는 분, 토플 110점 넘으시는 분",
        limit : 5,
        study_status : 0,
        number : 3,
        thumbnail : "294834981_1_thumbnail.png",
    },
    {
        study_id : 1,
        director_id : "hyundai",
        name : "토익 300점 스터디",
        reg_date : 203204924,
        update_date : 0,
        start_date : 29483498,
        duration : 5,
        end_date : 209489384,
        region : 1,
        category : 5,
        description : "영어 잘하시는 분, 토익 210점 넘으시는 분",
        limit : 10,
        study_status : 0,
        number : 5,
        thumbnail : "203204924_1_thumbnail.jpeg",
    },
    {
        study_id : 2,
        director_id : "toyota",
        name : "공기업 취업 스터디",
        reg_date : 203204924,
        update_date : 0,
        start_date : 29483498,
        duration : 4,
        end_date : 209489384,
        region : 0,
        category : 4,
        description : "성실하신 분",
        limit : 5,
        study_status : 0,
        number : 1,
        thumbnail : "294834981_2_thumbnail.png",
    },
    {
        study_id : 3,
        director_id : "benz",
        name : "화학기사 자격증 스터디",
        reg_date : 203204924,
        update_date : 0,
        start_date : 29483498,
        duration : 10,
        end_date : 209489384,
        region : 3,
        category : 6,
        description : "영어 잘하시는 분, 토익 210점 넘으시는 분",
        limit : 10,
        study_status : 0,
        number : 5,
        thumbnail : "203204924_3_thumbnail.jpeg",
    }
    
]

var study_status = {
    arranged : 0,
    onoging : 1,
    completed : 2
}

var study_photos = [
    {
        study_id : 0,
        photo : "study_0_0.png"
    },
    {
        study_id : 0,
        photo : "study_0_1.png"
    },
    {
        study_id : 2,
        photo : "study_2_0.png"
    }
]

var category = {
    business : 0,
    plan : 1,
    marketing : 2,
    r_d : 3,
    public_company : 4,
    language : 5,
    certificate : 6
}

var member = [
    {
        study_id : 0,
        member_id : "pepsi"
    },
    {
        study_id : 0,
        member_id : "coca",   
    },
    {
        study_id : 1,
        member_id : "hyundai"
    },
    {
        study_id : 1,
        member_id : "toyota"
    },
    {
        study_id : 2,
        member_id : "apple"
    }
]

var notice = [
    {
        index : 0,
        study_id : 0,
        notice : "안녕하세요 팀장입니다. ~",
        reg_date : 240834983,
        update_date : 240304923
    },
    {
        index : 1,
        study_id : 0,
        notice : "안녕하세요 팀장입니다. ~",
        reg_date : 240834983,
        update_date : 240304923
    },
    {
        index : 2,
        study_id : 0,
        notice : "안녕하세요 팀장입니다. ~",
        reg_date : 240834983,
        update_date : 240304923
    }
]

var study_time = [
    {
        index : 0,
        study_id : 0, 
        study_day : "월",
        study_time : "14:00 ? 모름"
    },
    {
        index : 1,
        study_id : 0, 
        study_day : "수",
        study_time : "14:00"
    },
    {
        index : 2,
        study_id : 1, 
        study_day : "화",
        study_time : "22:00"
    }
]

var schedule = [
    {
        schedule_id : 0,
        study_id : 0,
        schedule_no : 0,
        schedule_time : 2387234,
        content : "정기 모임 없음"
    },
    {
        schedule_id : 1,
        study_id : 0,
        schedule_no : 1,
        schedule_time : 2387234,
        content : "종각역에서 모임"
    },
    {
        schedule_id : 2,
        study_id : 0,
        schedule_no : 2,
        schedule_time : 2387234,
        content : "종각역에서 모임"
    },
    {
        schedule_id : 3,
        study_id : 0,
        schedule_no : 3,
        schedule_time : 2387234,
        content : "정기 모임 없음"
    },
    {
        schedule_id : 4,
        study_id : 1,
        schedule_no : 0,
        schedule_time : 2387234,
        content : "첫 모임 종각에서"
    },
    {
        schedule_id : 5,
        study_id : 1,
        schedule_no : 1,
        schedule_time : 2387234,
        content : "두 번째 모임"
    }
]

var attendacne = [
    {
        member_id : "pepsi",
        schedule_id : 0,
        attendance_type : 1
    }
]

var attendance_type = {
    present : 0,
    absent : 1,
    sick : 2
}

var candidate = [
    {
        study_id : 0,
        candidate_id : "pepsi",
        candidate_status : 0
    },
    {
        study_id : 1,
        candidate_id : "pepsi",
        candidate_status : 2
    },
    {
        study_id : 3,
        candidate_id : "pepsi",
        candidate_status : 1
    }
]

var candidate_statue = {
    registerer : 0,
    invited : 1,
    participating : 2,
    reject : 3,
    normal : 4
}