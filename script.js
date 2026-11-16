const searchData = [
  {
    title: "坚定信仰与不懈奋斗",
    keywords: "红色精神 精神谱系 坚定信仰 不懈奋斗 初心 党史",
    section: "红色溯源",
    url: "red-origin.html#origin-spirit",
  },
  {
    title: "在历史选择中追寻信仰之光",
    keywords: "革命先辈 历史选择 信仰之光 先驱 人物 初心 使命",
    section: "红色溯源",
    url: "red-origin.html#origin-pioneers",
  },
  {
    title: "让革命记忆可触可感",
    keywords: "红色文物 革命文物 草鞋 棉衣 枪支 文物故事 革命记忆",
    section: "红色溯源",
    url: "red-origin.html#origin-relics",
  },
  {
    title: "从细节中读懂初心与担当",
    keywords: "红色故事 半条被子 军需处长 军民鱼水情 初心 担当",
    section: "红色溯源",
    url: "red-origin.html#origin-stories",
  },
  {
    title: "把信仰力量转化为前行动力",
    keywords: "初心使命 信仰力量 前行动力 长征 新时代青年 时代使命",
    section: "红色溯源",
    url: "red-origin.html#origin-mission",
  },
  {
    title: "一条不断延伸的奋斗之路",
    keywords: "历史时间轴 党史 百年奋斗 发展历程 重要节点",
    section: "历史时间轴",
    url: "timeline.html#timeline-1921",
  },
  {
    title: "中国共产党成立",
    keywords: "1921 建党 中共一大 上海 嘉兴 南湖 红船",
    section: "历史时间轴",
    url: "timeline.html#timeline-1921",
  },
  {
    title: "中共二大",
    keywords: "1922 中共二大 民主革命纲领 反帝 反封建",
    section: "历史时间轴",
    url: "timeline.html#timeline-1922",
  },
  {
    title: "国共合作",
    keywords: "1924 国共合作 国民革命 统一战线",
    section: "历史时间轴",
    url: "timeline.html#timeline-1924",
  },
  {
    title: "南昌起义",
    keywords: "1927 南昌起义 武装斗争 建军",
    section: "历史时间轴",
    url: "timeline.html#timeline-1927-nanchang",
  },
  {
    title: "红军长征开始",
    keywords: "1934 长征开始 中央红军 战略转移 长征出发",
    section: "历史时间轴",
    url: "timeline.html#timeline-1934",
  },
  {
    title: "遵义会议",
    keywords: "1935 遵义会议 长征 历史转折 毛泽东",
    section: "历史时间轴",
    url: "timeline.html#timeline-1935",
  },
  {
    title: "红军三大主力会师",
    keywords: "1936 胜利会师 红一 红二 红四方面军 会宁 静宁",
    section: "历史时间轴",
    url: "timeline.html#timeline-1936",
  },
  {
    title: "中华人民共和国成立",
    keywords: "1949 新中国成立 中华人民共和国 开国大典",
    section: "历史时间轴",
    url: "timeline.html#timeline-1949",
  },
  {
    title: "改革开放",
    keywords: "1978 改革开放 十一届三中全会 社会主义现代化",
    section: "历史时间轴",
    url: "timeline.html#timeline-1978",
  },
  {
    title: "进入新时代",
    keywords: "2012 新时代 中国特色社会主义 改革发展",
    section: "历史时间轴",
    url: "timeline.html#timeline-2012",
  },
  {
    title: "建党百年",
    keywords: "2021 建党百年 中国共产党成立一百周年 百年奋斗",
    section: "历史时间轴",
    url: "timeline.html#timeline-2021",
  },
  {
    title: "如何按时间轴展开学习",
    keywords: "历史时间轴 学习方法 党史框架 重要节点 权威资料",
    section: "历史时间轴",
    url: "timeline.html#study-guide",
  },
  {
    title: "先建立框架",
    keywords: "时间轴 学习指引 建立框架 历史脉络 党史学习",
    section: "历史时间轴",
    url: "timeline.html#study-guide",
  },
  {
    title: "再联系背景",
    keywords: "时间轴 学习指引 历史背景 时代环境 党史学习",
    section: "历史时间轴",
    url: "timeline.html#study-guide",
  },
  {
    title: "结合权威资料",
    keywords: "时间轴 学习指引 权威资料 史料 党史学习",
    section: "历史时间轴",
    url: "timeline.html#study-guide",
  },
  {
    title: "沿着十个重要节点重走长征路",
    keywords: "长征专题 长征节点 二万五千里 红军 长征路线",
    section: "长征专题",
    url: "long-march.html#march-overview",
  },
  {
    title: "长征概览",
    keywords: "长征 长征概览 红军长征 战略转移 二万五千里",
    section: "长征专题",
    url: "long-march.html#march-overview",
  },
  {
    title: "湘江战役",
    keywords: "长征 湘江 战役 纪念馆 烈士 广西 全州",
    section: "长征专题",
    url: "long-march.html#march-xiangjiang",
  },
  {
    title: "遵义会议",
    keywords: "长征 遵义会议 历史转折 毛泽东 贵州 遵义",
    section: "长征专题",
    url: "long-march.html#march-zunyi",
  },
  {
    title: "四渡赤水",
    keywords: "长征 四渡赤水 赤水 运动战 贵州 遵义",
    section: "长征专题",
    url: "long-march.html#march-four-rivers",
  },
  {
    title: "巧渡金沙江",
    keywords: "长征 巧渡金沙江 金沙江 皎平渡 云南 禄劝",
    section: "长征专题",
    url: "long-march.html#march-jinsha",
  },
  {
    title: "强渡大渡河·飞夺泸定桥",
    keywords: "长征 大渡河 泸定桥 铁索 四川 泸定",
    section: "长征专题",
    url: "long-march.html#march-dadu-luding",
  },
  {
    title: "翻越雪山",
    keywords: "长征 翻越雪山 夹金山 大雪山 四川 宝兴",
    section: "长征专题",
    url: "long-march.html#march-snow-mountains",
  },
  {
    title: "跋涉草地",
    keywords: "长征 跋涉草地 松潘草地 沼泽 四川 松潘",
    section: "长征专题",
    url: "long-march.html#march-grassland",
  },
  {
    title: "胜利会师",
    keywords: "长征 胜利会师 红军三大主力 会宁 静宁 1936",
    section: "长征专题",
    url: "long-march.html#march-join",
  },
  {
    title: "长征精神",
    keywords: "长征精神 坚定信念 不怕牺牲 团结奋斗 红色精神",
    section: "长征专题",
    url: "long-march.html#march-spirit",
  },
  {
    title: "领取长征传承徽章",
    keywords:
      "徽章 荣誉 领取徽章 荣誉徽章 领取专属徽章 长征传承徽章 长征精神传承者 专属编号 下载徽章",
    section: "长征专题",
    url: "long-march.html#march-badge",
    action: "march-badge",
  },
  {
    title: "中国地图与基地分布",
    keywords: "中国地图 红色基地 基地分布 井冈山 遵义 延安 西柏坡 瑞金",
    section: "基地分布",
    url: "bases.html#bases-map",
  },
  {
    title: "长征沿线重点地标",
    keywords: "长征 地标 纪念馆 会宁 泸定 夹金山 松潘 湘江",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "广西全州 · 湘江战役纪念园",
    keywords: "广西 全州 湘江战役纪念园 湘江战役纪念馆 烈士纪念碑 渡口遗址",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "贵州遵义 · 遵义会议会址",
    keywords: "贵州 遵义 遵义会议会址 纪念馆 长征转折 红色地标",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "贵州赤水 · 四渡赤水纪念馆",
    keywords: "贵州 赤水 四渡赤水纪念馆 土城战役 赤水红军渡口",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "云南禄劝 · 皎平渡红军渡江纪念馆",
    keywords: "云南 禄劝 皎平渡 红军渡江纪念馆 巧渡金沙江 渡江旧址",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "四川泸定 · 泸定桥革命文物纪念馆",
    keywords: "四川 泸定 泸定桥 革命文物纪念馆 飞夺泸定桥 大渡河",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "四川宝兴 · 夹金山红军长征纪念地",
    keywords: "四川 宝兴 夹金山 红军长征纪念地 翻越雪山 长征遗址",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "四川松潘 · 红军长征纪念碑碑园",
    keywords: "四川 松潘 红军长征纪念碑碑园 松潘草地 长征纪念遗址",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "甘肃会宁 · 红军三大主力会师纪念馆",
    keywords: "甘肃 会宁 红军三大主力会师纪念馆 长征胜利 会师旧址",
    section: "基地分布",
    url: "bases.html#march-landmarks",
  },
  {
    title: "基地的价值与功能",
    keywords: "红色基地 价值 功能 党史教育 精神传承 研学实践 文化传播",
    section: "基地分布",
    url: "bases.html#bases-value",
  },
  {
    title: "党史教育",
    keywords: "党史教育 红色基地 实景课堂 党史学习教育 现场教学 理想信念",
    section: "基地分布",
    url: "bases.html#bases-value",
  },
  {
    title: "精神传承",
    keywords: "精神传承 长征精神 红色基地 革命旧址 烈士丰碑 精神育人",
    section: "基地分布",
    url: "bases.html#bases-value",
  },
  {
    title: "研学实践",
    keywords: "研学实践 红色研学 思政实践 素质教育 实地探究 青年学生",
    section: "基地分布",
    url: "bases.html#bases-value",
  },
  {
    title: "文化传播",
    keywords: "文化传播 红色文化 公共文化服务 主题展览 文献出版 新媒体",
    section: "基地分布",
    url: "bases.html#bases-value",
  },
  {
    title: "基地新时代的活化利用",
    keywords: "红色基地 活化利用 数字技术 沉浸式体验 主题线路 社会参与",
    section: "基地分布",
    url: "bases.html#bases-revitalization",
  },
  {
    title: "数字化展陈",
    keywords: "数字化展陈 数字档案 虚拟展厅 线上导览 无障碍访问 云端参观",
    section: "基地分布",
    url: "bases.html#bases-revitalization",
  },
  {
    title: "沉浸式体验",
    keywords: "沉浸式体验 场景复原 互动装置 多媒体叙事 红色教育 未成年人保护",
    section: "基地分布",
    url: "bases.html#bases-revitalization",
  },
  {
    title: "主题线路",
    keywords: "主题线路 长征路线 红色研学 广西 贵州 四川 甘肃 红色文旅",
    section: "基地分布",
    url: "bases.html#bases-revitalization",
  },
  {
    title: "文创与社区联动",
    keywords: "文创 社区联动 志愿服务 红色故事 学校共建 公益 防止过度商业化",
    section: "基地分布",
    url: "bases.html#bases-revitalization",
  },
  {
    title: "要闻动态",
    keywords: "红色资讯 要闻动态 党史学习 红色文化 新闻",
    section: "红色资讯",
    url: "news.html#news-headlines",
  },
  {
    title: "各地持续开展党史学习教育现场教学活动",
    keywords: "党史学习教育 现场教学 革命旧址 纪念场馆 专题讲解 情景体验",
    section: "红色资讯",
    url: "news.html#news-headlines",
  },
  {
    title: "红色场馆推出数字化参观服务新场景",
    keywords: "红色场馆 数字化 虚拟展厅 语音导览 数字档案 线上参观",
    section: "红色资讯",
    url: "news.html#news-headlines",
  },
  {
    title: "青年群体参与红色文化志愿服务",
    keywords: "青年 红色文化 志愿服务 讲解 红色场馆",
    section: "红色资讯",
    url: "news.html#news-headlines",
  },
  {
    title: "长征主题研学线路受到广泛关注",
    keywords: "长征 主题研学 研学线路 红色文旅 长征沿线",
    section: "红色资讯",
    url: "news.html#news-headlines",
  },
  {
    title: "学习专栏",
    keywords: "红色资讯 学习专栏 专题解读 深度文章 理论研究 传播观察",
    section: "红色资讯",
    url: "news.html#news-features",
  },
  {
    title: "从遵义会议看中国革命的伟大转折",
    keywords: "遵义会议 中国革命 伟大转折 党史 独立自主 实事求是",
    section: "红色资讯",
    url: "news.html#news-features",
  },
  {
    title: "长征精神为何具有穿越时空的力量",
    keywords: "长征精神 穿越时空 理想信念 不怕牺牲 团结奋斗 当代青年",
    section: "红色资讯",
    url: "news.html#news-features",
  },
  {
    title: "数字技术如何赋能红色文化传播",
    keywords: "数字技术 红色文化传播 数字档案 虚拟展馆 交互叙事 新媒体",
    section: "红色资讯",
    url: "news.html#news-features",
  },
  {
    title: "党史与长征知识小问答",
    keywords: "党史 长征 知识问答 选择题 测试 答题",
    section: "红色资讯",
    url: "news.html#news-features",
  },
  {
    title: "资源推荐",
    keywords: "红色资讯 资源推荐 书籍 纪录片 线上展馆 党史学习",
    section: "红色资讯",
    url: "news.html#news-resources",
  },
  {
    title: "《中国共产党简史》",
    keywords: "中国共产党简史 党史 百年奋斗 基础读本 系统学习",
    section: "红色资讯",
    url: "news.html#news-resources",
  },
  {
    title: "《长征》",
    keywords: "长征 纪录片 历史影像 亲历者 重大事件 艰苦历程",
    section: "红色资讯",
    url: "news.html#news-resources",
  },
  {
    title: "中国共产党历史展览馆网上展馆",
    keywords: "中国共产党历史展览馆 网上展馆 云展馆 党史展览 线上展陈",
    section: "红色资讯",
    url: "news.html#news-resources",
  },
  {
    title: "《红军长征史》",
    keywords: "红军长征史 长征 历史背景 行军过程 重要战役 专题阅读",
    section: "红色资讯",
    url: "news.html#news-resources",
  },
  {
    title: "重要学习内容",
    keywords: "首页 要闻动态 党史专题 学习路径 红色教育基地 革命文物",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "沿着历史深处阅读",
    keywords: "首页 专题聚焦 党史学习 历史阅读 红色溯源 长征专题 红色地标",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "中国共产党成立的历史背景与思想准备",
    keywords: "首页 中国共产党成立 历史背景 思想准备 红色溯源",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "重要历史节点如何串联成完整脉络",
    keywords: "首页 历史节点 时间脉络 历史时间轴 党史发展",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "遵义会议：中国革命历史上的伟大转折",
    keywords: "首页 遵义会议 伟大转折 中国革命 长征专题",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "从上海到延安：红色地标中的奋斗印记",
    keywords: "首页 上海 延安 红色地标 奋斗印记 红色基地",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "学习提示",
    keywords: "首页 通知公告 学习方法 党史学习 学习安排",
    section: "首页",
    url: "index.html#news",
  },
  {
    title: "长征数据看板",
    keywords: "首页 长征数据 数据看板 二万五千里 25000 14个省份 大山 河流 长征里程",
    section: "首页",
    url: "index.html#numbers",
  },
  {
    title: "从阅读、讲解到专题学习",
    keywords: "首页 学习专栏 阅读 微党课 讲解 专题学习",
    section: "首页",
    url: "index.html#learning",
  },
  {
    title: "重点文章",
    keywords: "首页 学习选文 中共一大 百年奋斗 长征精神 红色教育基地",
    section: "首页",
    url: "index.html#learning",
  },
  {
    title: "微党课推荐",
    keywords: "首页 党史讲堂 微党课 长征 遵义会议 初心使命 革命纪念馆",
    section: "首页",
    url: "index.html#learning",
  },
  {
    title: "专题学习",
    keywords: "首页 特别专栏 红色溯源 历史时间轴 长征专题 基地分布 红色资讯",
    section: "首页",
    url: "index.html#learning",
  },
  {
    title: "沿着不同主题深入阅读",
    keywords: "首页 专题集锦 红色溯源 历史时间轴 长征专题 基地分布",
    section: "首页",
    url: "index.html#topics",
  },
  {
    title: "长征精神谱系",
    keywords:
      "首页 长征精神谱系 红船精神 井冈山精神 长征精神 延安精神 红色精神",
    section: "首页",
    url: "index.html#spirit",
  },
  {
    title: "红船精神",
    keywords:
      "红船精神 开天辟地 敢为人先 坚定理想 百折不挠 嘉兴南湖 建党精神 精神谱系",
    section: "首页",
    url: "index.html#spirit-red-boat",
  },
  {
    title: "井冈山精神",
    keywords:
      "井冈山精神 坚定信念 艰苦奋斗 实事求是 敢闯新路 依靠群众 井冈山 精神谱系",
    section: "首页",
    url: "index.html#spirit-jinggangshan",
  },
  {
    title: "长征精神",
    keywords:
      "长征精神 坚定理想 不怕牺牲 独立自主 团结奋进 二万五千里 红色精神 精神谱系",
    section: "首页",
    url: "index.html#spirit-long-march",
  },
  {
    title: "延安精神",
    keywords:
      "延安精神 坚定方向 解放思想 实事求是 艰苦奋斗 为人民服务 延安 精神谱系",
    section: "首页",
    url: "index.html#spirit-yanan",
  },
  {
    title: "学习资料",
    keywords: "首页 学习资料 党史学习 资料选编 历史节点 学习框架",
    section: "首页",
    url: "index.html#topics",
  },
  {
    title: "重点推荐",
    keywords: "首页 重点推荐 红色教育基地 学习路线 红色地标",
    section: "首页",
    url: "index.html#topics",
  },
  {
    title: "留言板 / 学习心得",
    keywords: "留言 心得 学习心得 评论 互动 交流 留言板",
    section: "悬浮功能",
    url: "#message-board-drawer",
    action: "message-board",
  },
  {
    title: "语音朗读 / 页面听书",
    keywords: "语音 朗读 播报 听书 播放 暂停 无障碍 页面听书",
    section: "悬浮功能",
    url: "#read-aloud-panel",
    action: "read-aloud",
  },
];

const searchShells = document.querySelectorAll("[data-search]");

searchShells.forEach((searchShell, index) => {
  const form = searchShell.querySelector("[data-search-form]");
  const input = form?.querySelector(".search-input");
  const results = searchShell.querySelector("[data-search-results]");
  const summary = searchShell.querySelector("[data-search-summary]");
  const list = searchShell.querySelector("[data-search-list]");

  if (!form || !input || !results || !summary || !list) {
    return;
  }

  const resultsId = `search-results-${index + 1}`;
  results.id = resultsId;
  input.setAttribute("aria-controls", resultsId);
  input.setAttribute("aria-expanded", "false");

  const normalizeSearchText = (value) =>
    value.trim().toLowerCase().replace(/\s+/g, " ");

  const closeResults = () => {
    results.hidden = true;
    input.setAttribute("aria-expanded", "false");
  };

  const openResults = () => {
    results.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = normalizeSearchText(input.value);
    const terms = query.split(" ").filter(Boolean);

    list.replaceChildren();

    if (!terms.length) {
      summary.textContent = "请输入搜索关键词";
      openResults();
      return;
    }

    const matches = searchData
      .map((item, itemIndex) => {
        const searchableText = normalizeSearchText(`${item.title} ${item.keywords}`);
        const normalizedTitle = normalizeSearchText(item.title);

        if (!terms.every((term) => searchableText.includes(term))) {
          return null;
        }

        let score = 4;

        if (normalizedTitle === query) {
          score = 0;
        } else if (
          terms.every((term) => normalizedTitle.includes(term))
        ) {
          score = 1;
        } else if (
          terms.every((term) =>
            normalizeSearchText(item.keywords).includes(term),
          )
        ) {
          score = 2;
        }

        return { item, itemIndex, score };
      })
      .filter(Boolean)
      .sort(
        (left, right) =>
          left.score - right.score || left.itemIndex - right.itemIndex,
      )
      .slice(0, 6);

    if (!matches.length) {
      summary.textContent = "抱歉，未找到相关内容";
      openResults();
      return;
    }

    summary.textContent = `搜索结果（${matches.length}）`;

    const fragment = document.createDocumentFragment();

    matches.forEach(({ item }) => {
      const listItem = document.createElement("li");
      listItem.className = "search-results__item";

      const link = document.createElement("a");
      link.className = "search-result__link";
      link.href = item.url;

      if (item.action) {
        link.dataset.searchAction = item.action;
        link.setAttribute("role", "button");

        if (item.action === "message-board" || item.action === "march-badge") {
          link.setAttribute("aria-haspopup", "dialog");
        }
      }

      const title = document.createElement("span");
      title.className = "search-result__title";
      title.textContent = item.title;

      const meta = document.createElement("span");
      meta.className = "search-result__meta";
      meta.textContent = item.section;

      link.append(title, meta);
      listItem.append(link);
      fragment.append(listItem);
    });

    list.append(fragment);
    openResults();
  });

  input.addEventListener("input", closeResults);

  list.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) {
      return;
    }

    const actionSelectors = {
      "message-board": "[data-message-board-open]",
      "read-aloud": "[data-read-aloud]",
      "march-badge": "[data-claim-march-badge]",
    };
    const actionButton = actionSelectors[link.dataset.searchAction]
      ? document.querySelector(actionSelectors[link.dataset.searchAction])
      : null;

    if (actionButton) {
      event.preventDefault();
      closeResults();
      actionButton.click();
      return;
    }

    closeResults();
  });

  document.addEventListener("click", (event) => {
    if (!searchShell.contains(event.target)) {
      closeResults();
    }
  });

  searchShell.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !results.hidden) {
      closeResults();
      input.focus();
    }
  });
});

const subnav = document.querySelector("[data-subnav]");

if (subnav) {
  const subnavLinks = Array.from(subnav.querySelectorAll(".subnav__link"));
  const defaultHash = subnavLinks[0]?.getAttribute("href") || "";

  const setActiveSubnavLink = (hash) => {
    const targetHash = hash && hash !== "#" ? hash : defaultHash;
    const activeLink =
      subnavLinks.find((link) => link.getAttribute("href") === targetHash) || subnavLinks[0];

    subnavLinks.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute("aria-current", "location");
        return;
      }

      link.removeAttribute("aria-current");
    });
  };

  subnavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveSubnavLink(link.getAttribute("href"));
    });
  });

  window.addEventListener("hashchange", () => {
    setActiveSubnavLink(window.location.hash);
  });

  setActiveSubnavLink(window.location.hash);
}

const sectionNavs = document.querySelectorAll("[data-section-nav]");

sectionNavs.forEach((sectionNav) => {
  const links = Array.from(sectionNav.querySelectorAll(".section-sidebar__link"));
  const targets = links
    .map((link) => {
      const href = link.getAttribute("href") || "";

      if (!href.startsWith("#")) {
        return null;
      }

      return document.getElementById(decodeURIComponent(href.slice(1)));
    })
    .filter(Boolean);

  if (!links.length || !targets.length) {
    return;
  }

  let observer = null;
  let lockedSectionId = null;
  let lockStartedAt = 0;
  let unlockTimerId = null;
  let scrollEndHandler = null;

  const setActiveSectionLink = (sectionId) => {
    const activeLink =
      links.find((link) => link.getAttribute("href") === `#${sectionId}`) || links[0];

    links.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute("aria-current", "location");
        return;
      }

      link.removeAttribute("aria-current");
    });
  };

  const clearScrollLock = () => {
    if (unlockTimerId !== null) {
      window.clearTimeout(unlockTimerId);
      unlockTimerId = null;
    }

    if (scrollEndHandler) {
      document.removeEventListener("scrollend", scrollEndHandler);
      scrollEndHandler = null;
    }
  };

  const releaseScrollLock = () => {
    if (!lockedSectionId) {
      return;
    }

    const finalSectionId = lockedSectionId;
    clearScrollLock();
    observer?.takeRecords();
    lockedSectionId = null;
    setActiveSectionLink(finalSectionId);
  };

  const scheduleScrollLockRelease = () => {
    clearScrollLock();

    const elapsed = performance.now() - lockStartedAt;
    const remainingLockTime = Math.max(0, 500 - elapsed);
    unlockTimerId = window.setTimeout(releaseScrollLock, remainingLockTime);
  };

  const lockSectionNavigation = (sectionId) => {
    clearScrollLock();
    lockedSectionId = sectionId;
    lockStartedAt = performance.now();
    setActiveSectionLink(sectionId);

    if ("onscrollend" in document) {
      scrollEndHandler = scheduleScrollLockRelease;
      document.addEventListener("scrollend", scrollEndHandler, { once: true });
      unlockTimerId = window.setTimeout(releaseScrollLock, 1200);
      return;
    }

    unlockTimerId = window.setTimeout(releaseScrollLock, 500);
  };

  const setActiveFromHash = () => {
    if (lockedSectionId) {
      setActiveSectionLink(lockedSectionId);
      return;
    }

    const hash = window.location.hash;

    if (!hash || hash === "#") {
      setActiveSectionLink(targets[0].id);
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));

    if (document.getElementById(sectionId)) {
      setActiveSectionLink(sectionId);
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = decodeURIComponent((link.getAttribute("href") || "").slice(1));
      lockSectionNavigation(sectionId);
    });
  });

  window.addEventListener("hashchange", setActiveFromHash);

  if ("IntersectionObserver" in window) {
    const visibility = new Map();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry);
        });

        if (lockedSectionId) {
          return;
        }

        const visibleTargets = targets
          .filter((target) => visibility.get(target.id)?.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.getBoundingClientRect().top - 150) -
              Math.abs(second.getBoundingClientRect().top - 150),
          );

        if (visibleTargets.length) {
          setActiveSectionLink(visibleTargets[0].id);
        }
      },
      {
        rootMargin: "-140px 0px -65% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));
  }

  setActiveFromHash();
});

const HERO_CAROUSEL_INTERVAL_MS = 5000;

const initializeHeroCarousel = () => {
  const heroCarousel = document.querySelector("[data-hero-carousel]");

  if (!heroCarousel) {
    return;
  }

  const slides = Array.from(heroCarousel.querySelectorAll("[data-carousel-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
  const carouselStage = heroCarousel.closest(".home-banner__stage");
  const sourceLabel = carouselStage?.querySelector(".media-source--hero");
  let activeIndex = 0;
  let timerId = null;

  const showSlide = (nextIndex) => {
    if (!slides.length) {
      return;
    }

    activeIndex = (nextIndex + slides.length) % slides.length;

    const activeSlide = slides[activeIndex];
    const sourceText = activeSlide.dataset.source;
    if (sourceLabel && sourceText) {
      sourceLabel.textContent = sourceText;
      sourceLabel.classList.toggle(
        "media-source--long",
        activeSlide.hasAttribute("data-source-long"),
      );
    }

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  };

  const startCarouselForced = () => {
    if (slides.length < 2) {
      return;
    }

    window.clearInterval(timerId);
    timerId = null;
    showSlide(activeIndex);

    timerId = window.setInterval(() => {
      showSlide(activeIndex + 1);
    }, HERO_CAROUSEL_INTERVAL_MS);
  };

  const wakeCarousel = () => {
    window.clearInterval(timerId);
    timerId = null;
    startCarouselForced();
  };

  heroCarousel.querySelectorAll("[data-carousel-image]").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest("[data-carousel-slide]")?.classList.add("is-image-error");
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      wakeCarousel();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(timerId);
      timerId = null;
      return;
    }

    wakeCarousel();
  });

  window.addEventListener("pageshow", wakeCarousel);
  window.addEventListener("focus", wakeCarousel);

  startCarouselForced();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeHeroCarousel, {
    once: true,
  });
} else {
  initializeHeroCarousel();
}

const initializeMarchStats = () => {
  const statsSection = document.querySelector("[data-countup-section]");

  if (!statsSection) {
    return;
  }

  const counters = Array.from(
    statsSection.querySelectorAll("[data-countup-number][data-countup]"),
  ).map((element) => ({
    element,
    target: Number.parseInt(element.dataset.countup || "0", 10),
  }));

  if (!counters.length || counters.some((counter) => !Number.isFinite(counter.target))) {
    return;
  }

  const numberFormatter = new Intl.NumberFormat("en-US");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let hasAnimated = false;

  const renderValue = (counter, value) => {
    counter.element.textContent = numberFormatter.format(
      Math.max(0, Math.round(value)),
    );
  };

  counters.forEach((counter) => renderValue(counter, 0));

  const animateCounters = () => {
    if (hasAnimated) {
      return;
    }

    hasAnimated = true;

    if (reducedMotion.matches) {
      counters.forEach((counter) => renderValue(counter, counter.target));
      statsSection.dataset.countupComplete = "true";
      return;
    }

    const duration = 1400;
    const stagger = 90;
    const startTime = performance.now();

    const tick = (now) => {
      let isComplete = true;

      counters.forEach((counter, index) => {
        const elapsed = Math.max(0, now - startTime - index * stagger);
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - (1 - progress) ** 3;

        renderValue(counter, counter.target * eased);

        if (progress < 1) {
          isComplete = false;
        }
      });

      if (isComplete) {
        counters.forEach((counter) => renderValue(counter, counter.target));
        statsSection.dataset.countupComplete = "true";
        return;
      }

      window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        observer.disconnect();
        animateCounters();
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(statsSection);
    return;
  }

  animateCounters();
};

if (document.readyState === "complete") {
  initializeMarchStats();
} else {
  document.addEventListener("DOMContentLoaded", initializeMarchStats, {
    once: true,
  });
}

document
  .querySelectorAll(
    ".march-card__image, .landmark-card__image, .learning-feature-card__image",
  )
  .forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
    });
  });

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const backToTopButtons = document.querySelectorAll("[data-back-to-top]");

if (backToTopButtons.length) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let updatePending = false;

  const updateBackToTopButtons = () => {
    const shouldShow = window.scrollY > 400;

    backToTopButtons.forEach((button) => {
      button.classList.toggle("is-visible", shouldShow);
    });

    updatePending = false;
  };

  const requestBackToTopUpdate = () => {
    if (updatePending) {
      return;
    }

    updatePending = true;
    window.requestAnimationFrame(updateBackToTopButtons);
  };

  window.addEventListener("scroll", requestBackToTopUpdate, { passive: true });
  window.addEventListener("pageshow", updateBackToTopButtons);

  backToTopButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    });
  });

  updateBackToTopButtons();
}

const LEARNING_PROGRESS_KEYS = Object.freeze({
  quiz: "red-theme-quiz-progress-v1",
  mapVisits: "xunji-march-map-visited-v1",
  poster: "xunji-march-poster-generated-v1",
  badge: "xunji-long-march-badge-v1",
  badgeClaim: "has_claimed_badge",
});
const LEARNING_PROGRESS_EVENT = "xunji:learning-progress-change";

const notifyLearningProgressChanged = () => {
  window.dispatchEvent(new Event(LEARNING_PROGRESS_EVENT));
};

// Approximate main-line distances for the learning visualization. Historical
// sources count detours differently, so Zunyi and Wuqi are anchored near
// 5,000 li and the established 25,000-li total respectively.
const LONG_MARCH_MILEAGE_DATA = Object.freeze({
  ruijin: {
    name: "瑞金（长征出发地）",
    order: 1,
    segmentLi: 0,
    cumulativeLi: 0,
    context: "1934年10月，中央红军从江西瑞金等地出发，开始战略转移。",
  },
  xiangjiang: {
    name: "湘江战役",
    order: 2,
    segmentLi: 2400,
    cumulativeLi: 2400,
    context: "1934年11月底至12月初，中央红军突破湘江第四道封锁线。",
  },
  tongdao: {
    name: "通道转兵",
    order: 3,
    segmentLi: 700,
    cumulativeLi: 3100,
    context: "1934年12月，红军在通道转兵，改向敌人力量薄弱的贵州前进。",
  },
  liping: {
    name: "黎平会议",
    order: 4,
    segmentLi: 400,
    cumulativeLi: 3500,
    context: "1934年12月，黎平会议进一步确定向贵州转兵的战略方针。",
  },
  zunyi: {
    name: "遵义会议",
    order: 5,
    segmentLi: 1500,
    cumulativeLi: 5000,
    context: "1935年1月，遵义会议在危急关头挽救了党和红军。",
  },
  anshun: {
    name: "强渡大渡河 · 安顺场",
    order: 6,
    segmentLi: 4800,
    cumulativeLi: 9800,
    context: "1935年5月，红军在安顺场强渡大渡河，打开北上通道。",
  },
  luding: {
    name: "飞夺泸定桥",
    order: 7,
    segmentLi: 1000,
    cumulativeLi: 10800,
    context: "1935年5月，红军飞夺泸定桥，粉碎敌人凭借天险阻击的企图。",
  },
  lazikou: {
    name: "腊子口战役",
    order: 8,
    segmentLi: 7200,
    cumulativeLi: 18000,
    context: "1935年9月，红军突破腊子口天险，为进入陕甘打开通道。",
  },
  wuqi: {
    name: "吴起镇会师",
    order: 9,
    segmentLi: 7000,
    cumulativeLi: 25000,
    context: "1935年10月，中央红军到达吴起镇，完成历时一年的长征。",
  },
  huining: {
    name: "会宁会师",
    order: 10,
    segmentLi: null,
    cumulativeLi: 25000,
    context: "1936年10月，红军三大主力在会宁、将台堡地区胜利会师。",
  },
});

const loadVisitedMarchNodes = () => {
  const visitedNodes = new Set();

  try {
    const storedNodes = JSON.parse(
      window.localStorage.getItem(LEARNING_PROGRESS_KEYS.mapVisits) || "[]",
    );

    if (!Array.isArray(storedNodes)) {
      return visitedNodes;
    }

    storedNodes.forEach((nodeId) => {
      if (
        typeof nodeId === "string" &&
        Object.prototype.hasOwnProperty.call(LONG_MARCH_MILEAGE_DATA, nodeId)
      ) {
        visitedNodes.add(nodeId);
      }
    });
  } catch {
    // Progress remains available without cross-page persistence.
  }

  return visitedNodes;
};

const recordVisitedMarchNode = (nodeId) => {
  if (
    typeof nodeId !== "string" ||
    !Object.prototype.hasOwnProperty.call(LONG_MARCH_MILEAGE_DATA, nodeId)
  ) {
    return;
  }

  const visitedNodes = loadVisitedMarchNodes();

  if (visitedNodes.has(nodeId)) {
    return;
  }

  visitedNodes.add(nodeId);

  try {
    window.localStorage.setItem(
      LEARNING_PROGRESS_KEYS.mapVisits,
      JSON.stringify([...visitedNodes]),
    );
    notifyLearningProgressChanged();
  } catch {
    // The map interaction still works when storage is unavailable.
  }
};

const mapViewport = document.querySelector("[data-map-viewport]");
const mapStage = mapViewport?.querySelector("[data-map-stage]");

if (mapViewport && mapStage) {
  const zoomInButton = mapViewport.querySelector("[data-map-zoom-in]");
  const zoomOutButton = mapViewport.querySelector("[data-map-zoom-out]");
  const resetButton = mapViewport.querySelector("[data-map-reset]");
  const zoomStatus = mapViewport.querySelector("[data-map-zoom-status]");
  const marchRouteSvg = mapStage.querySelector(".march-route");
  const marchRouteStars = marchRouteSvg?.querySelector(".march-route__stars");
  const mileagePanel = mapViewport.querySelector("[data-mileage-panel]");
  const mileageNode = mapViewport.querySelector("[data-mileage-node]");
  const mileageDistance = mapViewport.querySelector("[data-mileage-distance]");
  const mileageContext = mapViewport.querySelector("[data-mileage-context]");
  const mileageStep = mapViewport.querySelector("[data-mileage-step]");
  const marchMileageMarkers = [
    ...mapStage.querySelectorAll("[data-march-node]"),
  ];
  const mileageNumberFormat = new Intl.NumberFormat("zh-CN");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  const DETAIL_SCALE = 1.25;
  const pointers = new Map();
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let dragStart = null;
  let pinchStart = null;
  let announceTimerId = null;
  let routeIsInView = false;
  let markerPress = null;
  let markerPressMoved = false;
  let ignoreNextDocumentClick = false;
  let ignoreDocumentClickTimerId = null;

  const showMileageForMarker = (marker) => {
    const mileage = LONG_MARCH_MILEAGE_DATA[marker?.dataset.marchNode];

    if (!mileage) {
      return;
    }

    recordVisitedMarchNode(marker.dataset.marchNode);

    marchMileageMarkers.forEach((candidate) => {
      const isActive = candidate === marker;
      candidate.classList.toggle("is-active", isActive);
      candidate.setAttribute("aria-pressed", String(isActive));
    });

    if (mileageNode) {
      mileageNode.textContent = mileage.name;
    }

    if (mileageDistance) {
      mileageDistance.textContent = mileageNumberFormat.format(
        mileage.cumulativeLi,
      );
    }

    if (mileageContext) {
      mileageContext.textContent = mileage.context;
    }

    if (mileageStep) {
      const total = String(marchMileageMarkers.length).padStart(2, "0");
      mileageStep.textContent = `第 ${String(mileage.order).padStart(2, "0")} / ${total} 站`;
    }

    if (mileagePanel) {
      mileagePanel.classList.remove("is-updating");
      mileagePanel.classList.add("is-visible");
      mileagePanel.setAttribute("aria-hidden", "false");
      void mileagePanel.offsetWidth;
      mileagePanel.classList.add("is-updating");
    }

    if (document.activeElement !== marker) {
      marker.focus({ preventScroll: true });
    }
  };

  const closeMileagePanel = () => {
    marchMileageMarkers.forEach((marker) => {
      marker.classList.remove("is-active");
      marker.setAttribute("aria-pressed", "false");
    });

    if (mileagePanel) {
      mileagePanel.classList.remove("is-visible", "is-updating");
      mileagePanel.setAttribute("aria-hidden", "true");
    }
  };

  marchMileageMarkers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
  });

  if (typeof marchRouteSvg?.pauseAnimations === "function") {
    marchRouteSvg.pauseAnimations();
  }

  const syncMapRouteAnimation = () => {
    const shouldAnimate =
      Boolean(marchRouteStars) &&
      routeIsInView &&
      !document.hidden &&
      !reducedMotion.matches;

    mapViewport.classList.toggle("is-map-in-view", shouldAnimate);

    if (typeof marchRouteSvg?.pauseAnimations !== "function") {
      return;
    }

    if (shouldAnimate) {
      marchRouteSvg.unpauseAnimations();
    } else {
      marchRouteSvg.pauseAnimations();
    }
  };

  if (marchRouteStars) {
    if ("IntersectionObserver" in window) {
      const routeObserver = new IntersectionObserver(
        (entries) => {
          const latestEntry = entries[entries.length - 1];
          routeIsInView = latestEntry.isIntersecting;
          syncMapRouteAnimation();
        },
        { threshold: 0.3 },
      );

      routeObserver.observe(mapViewport);
    } else {
      routeIsInView = true;
      syncMapRouteAnimation();
    }

    document.addEventListener("visibilitychange", syncMapRouteAnimation);
    reducedMotion.addEventListener("change", syncMapRouteAnimation);
  }

  const clamp = (value, minimum, maximum) =>
    Math.min(maximum, Math.max(minimum, value));

  const getPointerPosition = (clientX, clientY) => {
    const rect = mapViewport.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const clampTranslation = () => {
    const minimumX = mapViewport.clientWidth * (1 - scale);
    const minimumY = mapViewport.clientHeight * (1 - scale);
    translateX = clamp(translateX, minimumX, 0);
    translateY = clamp(translateY, minimumY, 0);
  };

  const announceZoom = () => {
    if (!zoomStatus) {
      return;
    }

    window.clearTimeout(announceTimerId);
    announceTimerId = window.setTimeout(() => {
      zoomStatus.textContent = `地图缩放 ${Math.round(scale * 100)}%`;
    }, 160);
  };

  const applyTransform = () => {
    // Keep the vector map on the 2D rendering path so zooming repaints paths instead of stretching a cached texture.
    mapStage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    mapStage.style.setProperty("--map-marker-inverse-scale", String(1 / scale));
    mapViewport.classList.toggle("is-zoom-detail", scale >= DETAIL_SCALE);

    if (zoomInButton) {
      zoomInButton.disabled = scale >= MAX_SCALE - 0.001;
    }

    if (zoomOutButton) {
      zoomOutButton.disabled = scale <= MIN_SCALE + 0.001;
    }

    if (resetButton) {
      resetButton.disabled = scale <= MIN_SCALE + 0.001;
    }
  };

  const zoomAt = (nextScale, clientX, clientY) => {
    const targetScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);

    if (Math.abs(targetScale - scale) < 0.001) {
      return false;
    }

    const pointer = getPointerPosition(clientX, clientY);
    const ratio = targetScale / scale;
    translateX = pointer.x - (pointer.x - translateX) * ratio;
    translateY = pointer.y - (pointer.y - translateY) * ratio;
    scale = targetScale;
    clampTranslation();
    applyTransform();
    return true;
  };

  const resetMap = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    dragStart = null;
    pinchStart = null;
    applyTransform();
    announceZoom();
  };

  const startDrag = (pointer) => {
    dragStart = {
      pointerId: pointer.pointerId,
      clientX: pointer.clientX,
      clientY: pointer.clientY,
      translateX,
      translateY,
    };
    pinchStart = null;
  };

  const startPinch = () => {
    const activePointers = [...pointers.values()];

    if (activePointers.length < 2) {
      pinchStart = null;
      return;
    }

    const first = getPointerPosition(
      activePointers[0].clientX,
      activePointers[0].clientY,
    );
    const second = getPointerPosition(
      activePointers[1].clientX,
      activePointers[1].clientY,
    );
    const midpointX = (first.x + second.x) / 2;
    const midpointY = (first.y + second.y) / 2;

    pinchStart = {
      distance: Math.max(
        1,
        Math.hypot(second.x - first.x, second.y - first.y),
      ),
      scale,
      translateX,
      translateY,
      worldX: (midpointX - translateX) / scale,
      worldY: (midpointY - translateY) / scale,
    };
    dragStart = null;
  };

  const syncPointerMode = () => {
    mapViewport.classList.toggle(
      "is-dragging",
      pointers.size > 0 && scale > MIN_SCALE,
    );

    if (pointers.size >= 2) {
      markerPress = null;
      markerPressMoved = true;
      startPinch();
    } else if (pointers.size === 1 && scale > MIN_SCALE) {
      startDrag([...pointers.values()][0]);
    } else {
      dragStart = null;
      pinchStart = null;
    }
  };

  const zoomFromCenter = (factor) => {
    const rect = mapViewport.getBoundingClientRect();
    const changed = zoomAt(
      scale * factor,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    );

    if (changed) {
      announceZoom();
    }
  };

  zoomInButton?.addEventListener("click", () => {
    zoomFromCenter(1.35);
  });

  zoomOutButton?.addEventListener("click", () => {
    zoomFromCenter(1 / 1.35);
  });

  resetButton?.addEventListener("click", resetMap);

  mapViewport.addEventListener(
    "wheel",
    (event) => {
      if (event.target.closest(".map-panel__controls, .map-mileage")) {
        return;
      }

      event.preventDefault();
      const delta =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? event.deltaY * 16
          : event.deltaY;
      const nextScale = scale * Math.exp(-delta * 0.0015);

      if (zoomAt(nextScale, event.clientX, event.clientY)) {
        announceZoom();
      }
    },
    { passive: false },
  );

  mapViewport.addEventListener("dblclick", (event) => {
    if (event.target.closest(".map-panel__controls, .map-mileage")) {
      return;
    }

    event.preventDefault();

    if (scale > MIN_SCALE + 0.05) {
      resetMap();
      return;
    }

    if (zoomAt(1.8, event.clientX, event.clientY)) {
      announceZoom();
    }
  });

  mapViewport.addEventListener("pointerdown", (event) => {
    if (
      event.target.closest(".map-panel__controls, .map-mileage") ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    ignoreNextDocumentClick = false;
    window.clearTimeout(ignoreDocumentClickTimerId);

    event.preventDefault();
    pointers.set(event.pointerId, {
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
    });

    if (pointers.size === 1) {
      const pressedMarker = event.target.closest("[data-march-node]");
      markerPress = pressedMarker
        ? {
            marker: pressedMarker,
            pointerId: event.pointerId,
            clientX: event.clientX,
            clientY: event.clientY,
          }
        : null;
      markerPressMoved = false;
    } else {
      markerPress = null;
      markerPressMoved = true;
    }

    try {
      mapViewport.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is an enhancement; gesture handling still works without it.
    }

    syncPointerMode();
  });

  mapViewport.addEventListener("pointermove", (event) => {
    const pointer = pointers.get(event.pointerId);

    if (!pointer) {
      return;
    }

    event.preventDefault();
    pointer.clientX = event.clientX;
    pointer.clientY = event.clientY;

    if (markerPress?.pointerId === event.pointerId) {
      const movement = Math.hypot(
        event.clientX - markerPress.clientX,
        event.clientY - markerPress.clientY,
      );

      if (movement > 8) {
        markerPressMoved = true;
      }
    }

    if (pointers.size >= 2 && pinchStart) {
      const activePointers = [...pointers.values()];
      const first = getPointerPosition(
        activePointers[0].clientX,
        activePointers[0].clientY,
      );
      const second = getPointerPosition(
        activePointers[1].clientX,
        activePointers[1].clientY,
      );
      const midpointX = (first.x + second.x) / 2;
      const midpointY = (first.y + second.y) / 2;
      const distance = Math.max(
        1,
        Math.hypot(second.x - first.x, second.y - first.y),
      );
      const targetScale = clamp(
        pinchStart.scale * (distance / pinchStart.distance),
        MIN_SCALE,
        MAX_SCALE,
      );

      scale = targetScale;
      translateX = midpointX - pinchStart.worldX * scale;
      translateY = midpointY - pinchStart.worldY * scale;
      clampTranslation();
      applyTransform();
      return;
    }

    if (
      pointers.size === 1 &&
      dragStart &&
      dragStart.pointerId === event.pointerId &&
      scale > MIN_SCALE
    ) {
      translateX =
        dragStart.translateX + (event.clientX - dragStart.clientX);
      translateY =
        dragStart.translateY + (event.clientY - dragStart.clientY);
      clampTranslation();
      applyTransform();
    }
  });

  const finishPointer = (event, allowMarkerSelection = false) => {
    if (!pointers.has(event.pointerId)) {
      return;
    }

    const markerToActivate =
      allowMarkerSelection &&
      markerPress?.pointerId === event.pointerId &&
      !markerPressMoved &&
      pointers.size === 1
        ? markerPress.marker
        : null;

    pointers.delete(event.pointerId);

    try {
      if (mapViewport.hasPointerCapture(event.pointerId)) {
        mapViewport.releasePointerCapture(event.pointerId);
      }
    } catch {
      // The pointer may already have been released by the browser.
    }

    syncPointerMode();

    if (markerToActivate) {
      ignoreNextDocumentClick = true;
      window.clearTimeout(ignoreDocumentClickTimerId);
      ignoreDocumentClickTimerId = window.setTimeout(() => {
        ignoreNextDocumentClick = false;
      }, 350);
      showMileageForMarker(markerToActivate);
    }

    if (!pointers.size) {
      markerPress = null;
      markerPressMoved = false;
      announceZoom();
    }
  };

  mapViewport.addEventListener("pointerup", (event) => {
    finishPointer(event, true);
  });
  mapViewport.addEventListener("pointercancel", (event) => {
    finishPointer(event);
  });
  mapViewport.addEventListener("lostpointercapture", (event) => {
    finishPointer(event);
  });

  mapViewport.addEventListener("click", (event) => {
    if (event.detail !== 0) {
      return;
    }

    const marker = event.target.closest("[data-march-node]");

    if (!marker || !mapStage.contains(marker)) {
      return;
    }

    event.preventDefault();
    showMileageForMarker(marker);
  });

  document.addEventListener("click", (event) => {
    if (!mileagePanel?.classList.contains("is-visible")) {
      return;
    }

    if (ignoreNextDocumentClick) {
      ignoreNextDocumentClick = false;
      window.clearTimeout(ignoreDocumentClickTimerId);
      return;
    }

    if (
      event.target.closest?.("[data-mileage-panel], [data-march-node]")
    ) {
      return;
    }

    closeMileagePanel();
  });

  if (typeof ResizeObserver === "function") {
    const resizeObserver = new ResizeObserver(() => {
      clampTranslation();
      applyTransform();
    });
    resizeObserver.observe(mapViewport);
  } else {
    window.addEventListener("resize", () => {
      clampTranslation();
      applyTransform();
    });
  }

  applyTransform();
}

const QUIZ_STORAGE_KEY = "red-theme-quiz-progress-v1";

const QUIZ_QUESTIONS = [
  {
    question: "中国共产党第一次全国代表大会于哪一年召开？",
    options: ["1919年", "1921年", "1927年", "1935年"],
    answer: 1,
  },
  {
    question: "中共二大第一次明确提出了哪一革命纲领？",
    options: [
      "反帝反封建的民主革命纲领",
      "社会主义初级阶段基本路线",
      "抗日民族统一战线方针",
      "改革开放总方针",
    ],
    answer: 0,
  },
  {
    question: "具有伟大转折意义的遵义会议于何时召开？",
    options: ["1927年8月", "1934年10月", "1935年1月", "1936年10月"],
    answer: 2,
  },
  {
    question: "中央红军开始长征是在哪一年？",
    options: ["1927年", "1931年", "1934年", "1937年"],
    answer: 2,
  },
  {
    question: "红军三大主力胜利会师是在什么时候？",
    options: ["1934年10月", "1935年1月", "1935年10月", "1936年10月"],
    answer: 3,
  },
  {
    question: "红军长征的总行程通常被概括为多少里？",
    options: ["一万里", "一万五千里", "二万里", "二万五千里"],
    answer: 3,
  },
  {
    question: "遵义会议最重要的历史意义是什么？",
    options: [
      "宣告中国共产党成立",
      "在危急关头挽救了党、挽救了红军、挽救了中国革命",
      "宣告新中国成立",
      "确定实行改革开放",
    ],
    answer: 1,
  },
  {
    question: "四渡赤水主要发生在哪一地区？",
    options: ["陕北黄土高原", "贵州、四川、云南交界地区", "江西井冈山地区", "华北平原"],
    answer: 1,
  },
  {
    question: "红军巧渡金沙江时主要从哪个渡口渡江？",
    options: ["皎平渡", "安顺场", "泸定桥", "界首渡"],
    answer: 0,
  },
  {
    question: "飞夺泸定桥横跨的是哪条河流？",
    options: ["金沙江", "赤水河", "大渡河", "湘江"],
    answer: 2,
  },
  {
    question: "红军长征途中翻越的第一座大雪山是？",
    options: ["六盘山", "夹金山", "岷山", "祁连山"],
    answer: 1,
  },
  {
    question: "红军长征途中穿越的著名草地位于哪里？",
    options: ["松潘草地", "呼伦贝尔草原", "若尔盖盆地东部", "河西走廊"],
    answer: 0,
  },
  {
    question: "中国共产党第七次全国代表大会在哪里召开？",
    options: ["上海", "瑞金", "遵义", "延安"],
    answer: 3,
  },
  {
    question: "中华人民共和国成立的时间是？",
    options: ["1945年8月15日", "1949年10月1日", "1951年10月1日", "1978年12月18日"],
    answer: 1,
  },
  {
    question: "我国改革开放伟大征程开启于哪次会议？",
    options: ["中共七大", "中共八大", "十一届三中全会", "中共十四大"],
    answer: 2,
  },
  {
    question: "中国共产党成立多少周年是在2021年？",
    options: ["80周年", "90周年", "95周年", "100周年"],
    answer: 3,
  },
  {
    question: "下列哪一项最能体现长征精神的核心？",
    options: [
      "坚定革命理想信念，坚信正义事业必然胜利",
      "因循守旧，固守原有经验",
      "追求个人荣誉，不计集体利益",
      "遇到困难时主动放弃目标",
    ],
    answer: 0,
  },
  {
    question: "中国共产党人的初心和使命是什么？",
    options: [
      "为中国人民谋幸福，为中华民族谋复兴",
      "实现个人价值最大化",
      "只追求经济高速增长",
      "照搬其他国家的发展道路",
    ],
    answer: 0,
  },
  {
    question: "中央红军长征的集结出发地主要位于哪里？",
    options: ["江西于都", "陕西延安", "贵州遵义", "甘肃会宁"],
    answer: 0,
  },
  {
    question: "中国共产党成立后，中国革命呈现出的新面貌是？",
    options: [
      "中国革命有了坚强领导核心、科学指导思想和正确前进方向",
      "中国革命不再需要依靠人民群众",
      "中国革命立即取得了完全胜利",
      "中国革命从此不再面临任何困难",
    ],
    answer: 0,
  },
];

const quizModal = document.querySelector("[data-quiz-modal]");
const quizOpenButtons = document.querySelectorAll("[data-quiz-open]");

if (quizModal && quizOpenButtons.length && QUIZ_QUESTIONS.length) {
  const quizPanel = quizModal.querySelector(".quiz-modal__panel");
  const quizBody = quizModal.querySelector("[data-quiz-body]");
  const quizQuestion = quizModal.querySelector("[data-quiz-question]");
  const quizNextButton = quizModal.querySelector("[data-quiz-next]");
  const quizRestartButton = quizModal.querySelector("[data-quiz-restart]");
  const quizSummary = quizModal.querySelector("[data-quiz-summary]");
  const quizProgress = quizModal.querySelector("[data-quiz-progress]");
  const quizScore = quizModal.querySelector("[data-quiz-score]");
  const quizProgressBar = quizModal.querySelector("[data-quiz-progress-bar]");
  const quizFinalScore = quizModal.querySelector("[data-quiz-final-score]");
  const quizSummaryText = quizModal.querySelector("[data-quiz-summary-text]");
  let lastFocusedElement = null;

  const createEmptyQuizState = () => ({
    currentIndex: 0,
    answers: {},
    completed: false,
  });

  const saveQuizState = () => {
    try {
      window.localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
    } catch {
      // The quiz remains usable when storage is unavailable.
    }
  };

  const loadQuizState = () => {
    const emptyState = createEmptyQuizState();

    try {
      const storedState = JSON.parse(window.localStorage.getItem(QUIZ_STORAGE_KEY) || "null");

      if (!storedState || typeof storedState !== "object") {
        return emptyState;
      }

      Object.entries(storedState.answers || {}).forEach(([rawIndex, rawAnswer]) => {
        const questionIndex = Number(rawIndex);
        const selected = Number(rawAnswer?.selected);
        const question = QUIZ_QUESTIONS[questionIndex];

        if (
          !question ||
          !Number.isInteger(selected) ||
          selected < 0 ||
          selected >= question.options.length
        ) {
          return;
        }

        emptyState.answers[questionIndex] = {
          selected,
          correct: selected === question.answer,
        };
      });

      const storedIndex = Number(storedState.currentIndex);

      if (Number.isInteger(storedIndex) && storedIndex >= 0 && storedIndex < QUIZ_QUESTIONS.length) {
        emptyState.currentIndex = storedIndex;
      }

      emptyState.completed =
        Boolean(storedState.completed) &&
        Object.keys(emptyState.answers).length === QUIZ_QUESTIONS.length;

      return emptyState;
    } catch {
      return emptyState;
    }
  };

  let quizState = loadQuizState();

  const getCorrectCount = () =>
    Object.values(quizState.answers).filter((answer) => answer.correct).length;

  const updateQuizStatus = () => {
    const questionNumber = quizState.completed
      ? QUIZ_QUESTIONS.length
      : quizState.currentIndex + 1;
    const progressPercent = quizState.completed
      ? 100
      : (questionNumber / QUIZ_QUESTIONS.length) * 100;

    quizProgress.textContent = quizState.completed
      ? `已完成 ${QUIZ_QUESTIONS.length} / ${QUIZ_QUESTIONS.length} 题`
      : `第 ${questionNumber} / ${QUIZ_QUESTIONS.length} 题`;
    quizScore.textContent = `答对 ${getCorrectCount()} 题`;
    quizProgressBar.style.width = `${progressPercent}%`;
  };

  const showQuizSummary = () => {
    const correctCount = getCorrectCount();

    quizBody.hidden = true;
    quizSummary.hidden = false;
    quizFinalScore.textContent = String(correctCount);

    if (correctCount === QUIZ_QUESTIONS.length) {
      quizSummaryText.textContent = "全部答对，党史与长征知识掌握得很扎实。";
    } else if (correctCount >= 16) {
      quizSummaryText.textContent = "整体掌握较好，可以回看错题继续巩固重要历史节点。";
    } else if (correctCount >= 10) {
      quizSummaryText.textContent = "已经掌握一部分知识，建议结合专题内容再次复习。";
    } else {
      quizSummaryText.textContent = "学习刚刚开始，可以重新答题，逐步熟悉党史与长征知识。";
    }

    updateQuizStatus();
  };

  const renderQuiz = () => {
    if (quizState.completed) {
      showQuizSummary();
      return;
    }

    const question = QUIZ_QUESTIONS[quizState.currentIndex];
    const existingAnswer = quizState.answers[quizState.currentIndex];

    quizBody.hidden = false;
    quizSummary.hidden = true;
    quizQuestion.replaceChildren();

    const questionNumber = document.createElement("p");
    questionNumber.className = "quiz-question__number";
    questionNumber.textContent = `第 ${quizState.currentIndex + 1} 题`;

    const questionTitle = document.createElement("h3");
    questionTitle.className = "quiz-question__title";
    questionTitle.textContent = question.question;

    const optionList = document.createElement("div");
    optionList.className = "quiz-options";

    question.options.forEach((optionText, optionIndex) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "quiz-option";
      optionButton.textContent = `${String.fromCharCode(65 + optionIndex)}. ${optionText}`;

      if (existingAnswer) {
        optionButton.disabled = true;

        if (optionIndex === question.answer) {
          optionButton.classList.add("is-correct");
        }

        if (optionIndex === existingAnswer.selected && !existingAnswer.correct) {
          optionButton.classList.add("is-wrong");
        }
      } else {
        optionButton.addEventListener("click", () => {
          const isCorrect = optionIndex === question.answer;

          quizState.answers[quizState.currentIndex] = {
            selected: optionIndex,
            correct: isCorrect,
          };
          saveQuizState();
          renderQuiz();
        });
      }

      optionList.append(optionButton);
    });

    quizQuestion.append(questionNumber, questionTitle, optionList);

    if (existingAnswer) {
      const feedback = document.createElement("p");
      const correctAnswer = question.options[question.answer];
      feedback.className = `quiz-feedback ${existingAnswer.correct ? "is-correct" : "is-wrong"}`;
      feedback.setAttribute("aria-live", "polite");
      feedback.textContent = existingAnswer.correct
        ? `回答正确。正确答案是：${correctAnswer}`
        : `回答错误。正确答案是：${correctAnswer}`;
      quizQuestion.append(feedback);
    }

    quizNextButton.hidden = !existingAnswer;
    quizNextButton.textContent =
      quizState.currentIndex === QUIZ_QUESTIONS.length - 1 ? "查看结果" : "下一题";
    quizBody.scrollTop = 0;
    updateQuizStatus();
  };

  const openQuiz = () => {
    lastFocusedElement = document.activeElement;
    quizModal.hidden = false;
    document.body.classList.add("quiz-modal-open");
    renderQuiz();
    window.requestAnimationFrame(() => quizPanel.focus());
  };

  const closeQuiz = () => {
    quizModal.hidden = true;
    document.body.classList.remove("quiz-modal-open");

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  quizOpenButtons.forEach((button) => {
    button.addEventListener("click", openQuiz);
  });

  quizModal.querySelectorAll("[data-quiz-close]").forEach((element) => {
    element.addEventListener("click", closeQuiz);
  });

  quizNextButton.addEventListener("click", () => {
    if (!quizState.answers[quizState.currentIndex]) {
      return;
    }

    if (quizState.currentIndex === QUIZ_QUESTIONS.length - 1) {
      quizState.completed = true;
      saveQuizState();
      renderQuiz();
      return;
    }

    quizState.currentIndex += 1;
    saveQuizState();
    renderQuiz();
  });

  quizRestartButton.addEventListener("click", () => {
    quizState = createEmptyQuizState();
    saveQuizState();
    renderQuiz();
  });

  document.addEventListener("keydown", (event) => {
    if (!quizModal.hidden && event.key === "Escape") {
      closeQuiz();
    }
  });
}

const MESSAGE_BOARD_STORAGE_KEY = "red-theme-message-board-v1";
const MESSAGE_USER_STORAGE_KEY = "red-theme-message-user-v1";
const MESSAGE_LIKES_STORAGE_KEY = "red-theme-message-likes-v1";
const LEGACY_REFLECTION_STORAGE_KEY = "red-theme-reflections-v1";
const MESSAGE_BOARD_LIMIT = 100;
const MESSAGE_TEXT_LIMIT = 240;
const TEST_VERIFICATION_CODE = "1234";
const VERIFICATION_VALIDITY_MS = 60 * 1000;
const PHONE_PATTERN = /^1[3-9]\d{9}$/;

const DEFAULT_MESSAGES = [
  {
    id: "message-seed-1",
    text: "通过重温长征历史，我更加理解了坚定信念和不怕困难的意义。每一次回望，都是对今天生活的一次提醒。",
    author: "一位读者",
    createdAt: "2026-10-15T10:20:00+08:00",
    likes: 18,
  },
  {
    id: "message-seed-2",
    text: "学习遵义会议这段历史后，我认识到实事求是、独立自主的重要性。面对问题，既要坚持原则，也要及时纠正错误。",
    author: "青年学习者",
    createdAt: "2026-10-12T15:45:00+08:00",
    likes: 12,
  },
  {
    id: "message-seed-3",
    text: "长征途中红军战士互相扶持、共同前进的细节让我很受触动。团结和担当，在今天依然是不可缺少的力量。",
    author: "匿名读者",
    createdAt: "2026-10-09T09:10:00+08:00",
    likes: 24,
  },
  {
    id: "message-seed-4",
    text: "红色基地不是静止的展馆，而是能够让人走近历史、思考现实的课堂。学习之后，更要把感悟落实到日常行动中。",
    author: "基层学习小组",
    createdAt: "2026-10-06T18:30:00+08:00",
    likes: 9,
  },
];

const MESSAGE_BOARD_MARKUP = `
  <button
    class="message-board-toggle"
    type="button"
    aria-controls="message-board-drawer"
    aria-expanded="false"
    data-message-board-open
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
      <path d="M8 9h8M8 13h5"></path>
    </svg>
    <span>留言板</span>
  </button>

  <div
    class="message-drawer"
    id="message-board-drawer"
    data-message-board
    aria-hidden="true"
  >
    <div class="message-drawer__backdrop" data-message-board-close aria-hidden="true"></div>
    <section
      class="message-drawer__panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-board-title"
      tabindex="-1"
    >
      <header class="message-drawer__header">
        <div>
          <p class="eyebrow">Reader Voices</p>
          <h2 id="message-board-title">留言板</h2>
          <p>写下学习感悟，与更多读者分享你眼中的红色记忆。</p>
        </div>
        <button class="message-drawer__close" type="button" aria-label="关闭留言板" data-message-board-close>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18"></path>
          </svg>
        </button>
      </header>

      <div class="message-board__body">
        <section class="message-board__view message-board__login" data-message-login-view>
          <p class="message-board__intro">验证手机号后即可发表留言和点赞。</p>
          <form class="message-login-form" data-message-login-form novalidate>
            <label for="message-phone">手机号</label>
            <input
              id="message-phone"
              name="phone"
              type="tel"
              inputmode="numeric"
              autocomplete="tel"
              maxlength="11"
              placeholder="请输入 11 位手机号"
              data-message-phone
            />

            <label for="message-code">验证码</label>
            <div class="message-login-form__code-row">
              <input
                id="message-code"
                name="code"
                type="text"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="4"
                placeholder="请输入验证码"
                data-message-code
              />
              <button type="button" data-message-send-code>获取验证码</button>
            </div>

            <p class="message-board__status" role="status" aria-live="polite" data-message-login-status hidden></p>
            <button class="button button--primary" type="submit">登录留言板</button>
            <p class="message-login-form__hint">当前为纯前端模拟登录，不会向服务器发送手机号。</p>
          </form>
        </section>

        <section class="message-board__view message-board__member" data-message-member-view hidden>
          <div class="message-board__account">
            <span>已登录</span>
            <strong data-message-masked-phone></strong>
            <button type="button" data-message-logout>退出</button>
          </div>

          <form class="message-compose" data-message-form>
            <label class="sr-only" for="message-content">写下你的学习心得或留言</label>
            <textarea
              id="message-content"
              name="message"
              rows="4"
              maxlength="240"
              placeholder="写下你的学习心得或留言..."
              required
              data-message-input
            ></textarea>
            <div class="message-compose__footer">
              <span data-message-character-count>0 / 240</span>
              <button class="button button--primary" type="submit">发布留言</button>
            </div>
            <p class="message-board__status" role="status" aria-live="polite" data-message-form-status hidden></p>
          </form>

          <div class="message-board__list-heading">
            <strong>最新留言</strong>
            <span data-message-total>共 0 条</span>
          </div>
          <div class="message-board__messages" data-message-list aria-live="polite"></div>
        </section>
      </div>
    </section>
  </div>
`;

const initializeMessageBoard = () => {
  if (document.querySelector("[data-message-board]")) {
    return;
  }

  document.body.insertAdjacentHTML("beforeend", MESSAGE_BOARD_MARKUP);

  const drawer = document.querySelector("[data-message-board]");
  const panel = drawer?.querySelector(".message-drawer__panel");
  const openButtons = document.querySelectorAll("[data-message-board-open]");
  const closeButtons = drawer?.querySelectorAll("[data-message-board-close]");
  const loginView = drawer?.querySelector("[data-message-login-view]");
  const memberView = drawer?.querySelector("[data-message-member-view]");
  const loginForm = drawer?.querySelector("[data-message-login-form]");
  const phoneInput = drawer?.querySelector("[data-message-phone]");
  const codeInput = drawer?.querySelector("[data-message-code]");
  const sendCodeButton = drawer?.querySelector("[data-message-send-code]");
  const loginStatus = drawer?.querySelector("[data-message-login-status]");
  const maskedPhone = drawer?.querySelector("[data-message-masked-phone]");
  const logoutButton = drawer?.querySelector("[data-message-logout]");
  const messageForm = drawer?.querySelector("[data-message-form]");
  const messageInput = drawer?.querySelector("[data-message-input]");
  const characterCount = drawer?.querySelector("[data-message-character-count]");
  const messageFormStatus = drawer?.querySelector("[data-message-form-status]");
  const messageList = drawer?.querySelector("[data-message-list]");
  const messageTotal = drawer?.querySelector("[data-message-total]");

  if (
    !drawer ||
    !panel ||
    !openButtons.length ||
    !closeButtons?.length ||
    !loginView ||
    !memberView ||
    !loginForm ||
    !phoneInput ||
    !codeInput ||
    !sendCodeButton ||
    !loginStatus ||
    !maskedPhone ||
    !logoutButton ||
    !messageForm ||
    !messageInput ||
    !characterCount ||
    !messageFormStatus ||
    !messageList ||
    !messageTotal
  ) {
    return;
  }

  let lastFocusedElement = null;
  let verificationExpiresAt = 0;
  let verificationTimerId = null;

  const setStatus = (element, text) => {
    element.textContent = text;
    element.hidden = !text;
  };

  const stopVerificationCountdown = () => {
    if (verificationTimerId !== null) {
      window.clearInterval(verificationTimerId);
      verificationTimerId = null;
    }
  };

  const updateVerificationButton = () => {
    const remainingSeconds = Math.max(
      0,
      Math.ceil((verificationExpiresAt - Date.now()) / 1000),
    );

    if (remainingSeconds > 0) {
      sendCodeButton.disabled = true;
      sendCodeButton.textContent = `${remainingSeconds}s后重新获取`;
      return;
    }

    stopVerificationCountdown();
    sendCodeButton.disabled = false;
    sendCodeButton.textContent = "获取验证码";
  };

  const startVerificationCountdown = () => {
    stopVerificationCountdown();
    verificationExpiresAt = Date.now() + VERIFICATION_VALIDITY_MS;
    updateVerificationButton();
    verificationTimerId = window.setInterval(updateVerificationButton, 250);
  };

  const resetVerificationState = () => {
    stopVerificationCountdown();
    verificationExpiresAt = 0;
    sendCodeButton.disabled = false;
    sendCodeButton.textContent = "获取验证码";
  };

  const createMessageId = () =>
    `message-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const normalizeDate = (dateValue) => {
    const date = new Date(dateValue);
    return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

  const normalizeMessage = (item) => {
    if (!item || typeof item !== "object" || typeof item.text !== "string") {
      return null;
    }

    const text = item.text.trim().slice(0, MESSAGE_TEXT_LIMIT);

    if (!text) {
      return null;
    }

    const author =
      typeof item.author === "string" && item.author.trim()
        ? item.author.trim().slice(0, 24)
        : "匿名读者";
    const likes = Math.max(0, Number.parseInt(item.likes, 10) || 0);

    return {
      id: typeof item.id === "string" && item.id ? item.id : createMessageId(),
      text,
      author,
      createdAt: normalizeDate(item.createdAt),
      likes,
    };
  };

  const loadLegacyMessages = () => {
    try {
      const parsed = JSON.parse(
        window.localStorage.getItem(LEGACY_REFLECTION_STORAGE_KEY) || "[]",
      );

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .slice(0, MESSAGE_BOARD_LIMIT)
        .map((item) =>
          normalizeMessage({
            ...item,
            author: item?.author === "匿名" ? "匿名读者" : item?.author,
            likes: 0,
          }),
        )
        .filter(Boolean);
    } catch {
      return [];
    }
  };

  const loadMessages = () => {
    try {
      const rawMessages = window.localStorage.getItem(MESSAGE_BOARD_STORAGE_KEY);

      if (!rawMessages) {
        const migratedMessages = loadLegacyMessages();
        return [...migratedMessages, ...DEFAULT_MESSAGES].slice(0, MESSAGE_BOARD_LIMIT);
      }

      const parsed = JSON.parse(rawMessages);

      if (!Array.isArray(parsed)) {
        return DEFAULT_MESSAGES;
      }

      const normalized = parsed
        .slice(0, MESSAGE_BOARD_LIMIT)
        .map(normalizeMessage)
        .filter(Boolean);

      return normalized.length ? normalized : DEFAULT_MESSAGES;
    } catch {
      return DEFAULT_MESSAGES;
    }
  };

  const saveMessages = () => {
    try {
      window.localStorage.setItem(
        MESSAGE_BOARD_STORAGE_KEY,
        JSON.stringify(messages),
      );
    } catch {
      // The board still works for the current page when storage is unavailable.
    }
  };

  const loadLikeRegistry = () => {
    try {
      const parsed = JSON.parse(
        window.localStorage.getItem(MESSAGE_LIKES_STORAGE_KEY) || "{}",
      );

      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return {};
      }

      return Object.fromEntries(
        Object.entries(parsed).map(([phone, likedIds]) => [
          phone,
          Array.isArray(likedIds)
            ? [...new Set(likedIds.filter((id) => typeof id === "string"))]
            : [],
        ]),
      );
    } catch {
      return {};
    }
  };

  const saveLikeRegistry = () => {
    try {
      window.localStorage.setItem(
        MESSAGE_LIKES_STORAGE_KEY,
        JSON.stringify(likeRegistry),
      );
    } catch {
      // A failed write only affects persistence after a refresh.
    }
  };

  const loadCurrentPhone = () => {
    try {
      const phone = window.localStorage.getItem(MESSAGE_USER_STORAGE_KEY) || "";
      return PHONE_PATTERN.test(phone) ? phone : null;
    } catch {
      return null;
    }
  };

  const maskPhone = (phone) => phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");

  const formatMessageDate = (dateValue) => {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let currentPhone = loadCurrentPhone();
  let messages = loadMessages();
  let likeRegistry = loadLikeRegistry();

  const getCurrentLikedIds = () => {
    if (!currentPhone) {
      return [];
    }

    if (!Array.isArray(likeRegistry[currentPhone])) {
      likeRegistry[currentPhone] = [];
    }

    return likeRegistry[currentPhone];
  };

  const createMessageCard = (message) => {
    const likedIds = new Set(getCurrentLikedIds());
    const isLiked = likedIds.has(message.id);
    const card = document.createElement("article");
    card.className = "message-card";
    card.dataset.messageId = message.id;

    const header = document.createElement("header");
    header.className = "message-card__header";

    const identity = document.createElement("div");
    identity.className = "message-card__identity";

    const avatar = document.createElement("span");
    avatar.className = "message-card__avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = message.author.slice(0, 1) || "读";

    const author = document.createElement("strong");
    author.textContent = message.author;

    identity.append(avatar, author);

    const time = document.createElement("time");
    time.dateTime = message.createdAt;
    time.textContent = formatMessageDate(message.createdAt);
    header.append(identity, time);

    const text = document.createElement("p");
    text.className = "message-card__text";
    text.textContent = message.text;

    const footer = document.createElement("footer");
    footer.className = "message-card__footer";

    const likeButton = document.createElement("button");
    likeButton.className = "message-card__like";
    likeButton.type = "button";
    likeButton.setAttribute("aria-pressed", String(isLiked));

    const heart = document.createElement("span");
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";

    const likeCount = document.createElement("span");
    likeCount.textContent = String(message.likes);

    likeButton.append(heart, likeCount);
    likeButton.classList.toggle("is-liked", isLiked);
    likeButton.setAttribute(
      "aria-label",
      `${isLiked ? "取消点赞" : "点赞"}，当前 ${message.likes} 个赞`,
    );

    likeButton.addEventListener("click", () => {
      if (!currentPhone) {
        return;
      }

      const phoneLikes = getCurrentLikedIds();
      const likedIndex = phoneLikes.indexOf(message.id);
      const willLike = likedIndex === -1;

      if (willLike) {
        phoneLikes.push(message.id);
        message.likes += 1;
      } else {
        phoneLikes.splice(likedIndex, 1);
        message.likes = Math.max(0, message.likes - 1);
      }

      saveLikeRegistry();
      saveMessages();

      likeButton.classList.toggle("is-liked", willLike);
      likeButton.setAttribute("aria-pressed", String(willLike));
      likeButton.setAttribute(
        "aria-label",
        `${willLike ? "取消点赞" : "点赞"}，当前 ${message.likes} 个赞`,
      );
      likeCount.textContent = String(message.likes);
    });

    footer.append(likeButton);
    card.append(header, text, footer);
    return card;
  };

  const renderMessages = () => {
    messageList.replaceChildren();
    messageTotal.textContent = `共 ${messages.length} 条`;

    if (!currentPhone) {
      return;
    }

    const fragment = document.createDocumentFragment();
    messages.forEach((message) => {
      fragment.append(createMessageCard(message));
    });
    messageList.append(fragment);
  };

  const updateAuthView = () => {
    const isLoggedIn = Boolean(currentPhone);
    loginView.hidden = isLoggedIn;
    memberView.hidden = !isLoggedIn;
    maskedPhone.textContent = isLoggedIn ? maskPhone(currentPhone) : "";
    renderMessages();
  };

  const closeMessageBoard = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("message-drawer-open");
    openButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  const openMessageBoard = () => {
    lastFocusedElement = document.activeElement;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("message-drawer-open");
    openButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "true");
    });

    window.requestAnimationFrame(() => {
      const target = currentPhone ? messageInput : phoneInput;
      target.focus({ preventScroll: true });
    });
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", openMessageBoard);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeMessageBoard);
  });

  document.addEventListener("keydown", (event) => {
    if (!drawer.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeMessageBoard();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      panel.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled])',
      ),
    ).filter((element) => !element.hidden && element.offsetParent !== null);

    if (!focusableElements.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  sendCodeButton.addEventListener("click", () => {
    const phone = phoneInput.value.trim();

    if (!PHONE_PATTERN.test(phone)) {
      setStatus(loginStatus, "请输入正确的 11 位手机号。");
      phoneInput.focus();
      return;
    }

    startVerificationCountdown();
    setStatus(loginStatus, "验证码已发送，请在 60 秒内完成登录。");
    codeInput.focus();
    window.alert(`测试验证码为：${TEST_VERIFICATION_CODE}`);
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const phone = phoneInput.value.trim();
    const code = codeInput.value.trim();

    if (!PHONE_PATTERN.test(phone)) {
      setStatus(loginStatus, "请输入正确的 11 位手机号。");
      phoneInput.focus();
      return;
    }

    if (!verificationExpiresAt) {
      setStatus(loginStatus, "请先获取验证码。");
      sendCodeButton.focus();
      return;
    }

    if (Date.now() > verificationExpiresAt) {
      setStatus(loginStatus, "验证码已过期，请重新获取。");
      sendCodeButton.focus();
      return;
    }

    if (code !== TEST_VERIFICATION_CODE) {
      setStatus(loginStatus, "验证码不正确，请输入测试验证码 1234。");
      codeInput.focus();
      return;
    }

    currentPhone = phone;

    try {
      window.localStorage.setItem(MESSAGE_USER_STORAGE_KEY, phone);
    } catch {
      // Login remains active for the current page if storage is unavailable.
    }

    setStatus(loginStatus, "");
    resetVerificationState();
    codeInput.value = "";
    updateAuthView();
    setStatus(messageFormStatus, "登录成功，可以发表留言了。");
    messageInput.focus();
  });

  logoutButton.addEventListener("click", () => {
    currentPhone = null;

    try {
      window.localStorage.removeItem(MESSAGE_USER_STORAGE_KEY);
    } catch {
      // The in-memory state still logs the user out.
    }

    setStatus(messageFormStatus, "");
    updateAuthView();
    phoneInput.value = "";
    codeInput.value = "";
    resetVerificationState();
    setStatus(loginStatus, "已退出登录。");
    phoneInput.focus();
  });

  messageInput.addEventListener("input", () => {
    characterCount.textContent = `${messageInput.value.length} / ${MESSAGE_TEXT_LIMIT}`;
    if (messageInput.value) {
      setStatus(messageFormStatus, "");
    }
  });

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!currentPhone) {
      updateAuthView();
      phoneInput.focus();
      return;
    }

    const text = messageInput.value.trim();

    if (!text) {
      setStatus(messageFormStatus, "请输入留言内容。");
      messageInput.focus();
      return;
    }

    messages.unshift({
      id: createMessageId(),
      text: text.slice(0, MESSAGE_TEXT_LIMIT),
      author: maskPhone(currentPhone),
      createdAt: new Date().toISOString(),
      likes: 0,
    });
    messages = messages.slice(0, MESSAGE_BOARD_LIMIT);
    saveMessages();
    messageInput.value = "";
    characterCount.textContent = `0 / ${MESSAGE_TEXT_LIMIT}`;
    setStatus(messageFormStatus, "留言已发布。");
    renderMessages();
    messageList.scrollTop = 0;
  });

  window.addEventListener("storage", (event) => {
    if (event.key === MESSAGE_BOARD_STORAGE_KEY) {
      messages = loadMessages();
      renderMessages();
    }

    if (event.key === MESSAGE_LIKES_STORAGE_KEY) {
      likeRegistry = loadLikeRegistry();
      renderMessages();
    }

    if (event.key === MESSAGE_USER_STORAGE_KEY) {
      currentPhone = loadCurrentPhone();
      updateAuthView();
    }
  });

  saveMessages();
  updateAuthView();
  characterCount.textContent = `0 / ${MESSAGE_TEXT_LIMIT}`;
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMessageBoard, { once: true });
} else {
  initializeMessageBoard();
}

const initializeGeneratedAssetPreview = () => {
  const modal = document.querySelector("[data-generated-preview]");

  if (!modal) {
    return null;
  }

  const panel = modal.querySelector(".badge-modal__panel");
  const image = modal.querySelector("[data-preview-image]");
  const eyebrowNode = modal.querySelector("[data-preview-eyebrow]");
  const titleNode = modal.querySelector("[data-preview-title]");
  const captionNode = modal.querySelector("[data-preview-caption]");
  const saveButton = modal.querySelector("[data-preview-save]");
  const closeButtons = modal.querySelectorAll("[data-preview-close]");
  let currentPreview = null;
  let lastFocusedElement = null;

  if (
    !panel ||
    !image ||
    !eyebrowNode ||
    !titleNode ||
    !captionNode ||
    !saveButton ||
    !closeButtons.length
  ) {
    return null;
  }

  const closePreview = () => {
    if (modal.hidden) {
      return;
    }

    modal.hidden = true;
    modal.classList.remove("is-open");
    document.body.classList.remove("generated-preview-open");
    image.removeAttribute("src");
    image.alt = "";
    currentPreview = null;
    saveButton.disabled = true;

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  };

  const openPreview = ({
    dataUrl,
    fileName,
    title,
    eyebrow = "Long March Heritage",
    caption = "",
    alt = "生成作品预览",
  }) => {
    if (!dataUrl) {
      throw new Error("Generated preview data is empty.");
    }

    lastFocusedElement = document.activeElement;
    currentPreview = { dataUrl, fileName };
    image.src = dataUrl;
    image.alt = alt;
    eyebrowNode.textContent = eyebrow;
    titleNode.textContent = title;
    captionNode.textContent = caption;
    captionNode.hidden = !caption;
    saveButton.disabled = false;
    saveButton.removeAttribute("aria-busy");
    modal.hidden = false;
    document.body.classList.add("generated-preview-open");

    window.requestAnimationFrame(() => {
      modal.classList.add("is-open");
      panel.focus({ preventScroll: true });
    });
  };

  const downloadPreview = () => {
    if (!currentPreview) {
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = currentPreview.dataUrl;
    downloadLink.download = currentPreview.fileName;
    downloadLink.hidden = true;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  saveButton.addEventListener("click", () => {
    if (!currentPreview) {
      return;
    }

    try {
      downloadPreview();
    } catch (error) {
      console.error("Failed to save the generated asset.", error);
      window.alert("保存失败，请稍后重试。");
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closePreview);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePreview();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closePreview();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => !element.hidden);

    if (!focusableElements.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  return { open: openPreview, close: closePreview };
};

const generatedAssetPreview = initializeGeneratedAssetPreview();

const initializeMarchPosterGenerator = () => {
  const posterButtons = Array.from(
    document.querySelectorAll("[data-generate-march-poster]"),
  );

  if (!posterButtons.length || !generatedAssetPreview) {
    return;
  }

  const POSTER_WIDTH = 800;
  const POSTER_HEIGHT = 1200;
  const DISPLAY_FONT =
    '"Noto Serif SC", "Songti SC", "SimSun", Georgia, serif';
  const BODY_FONT =
    '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif';
  const LINE_BREAK_FORBIDDEN_START =
    "，。！？；：、）》」』】〕”’…—,.!?;:%)]}";
  const LINE_BREAK_FORBIDDEN_END = "（《「『【〔“‘([{";
  const POSTER_CAPTIONS = {
    overview: "山河为证 · 征途如歌",
    battlefield: "血战湘江 · 信念如磐",
    "turning-point": "拨云见日 · 伟大转折",
    "agile-river": "四渡赤水 · 出奇制胜",
    gorge: "天险横江 · 勇者无惧",
    rapids: "铁索横江 · 飞夺天险",
    snow: "踏雪破寒 · 信念不灭",
    grassland: "穿越绝境 · 向光而行",
    victory: "胜利会师 · 星火燎原",
    spirit: "信仰如炬 · 征途如歌",
  };
  const POSTER_PALETTES = {
    overview: ["#380507", "#700a0d", "#991012"],
    battlefield: ["#220204", "#53070a", "#7e0a0d"],
    "turning-point": ["#390507", "#760b0d", "#a61212"],
    "agile-river": ["#310406", "#65090c", "#8f0d10"],
    gorge: ["#200305", "#4d070a", "#76090c"],
    rapids: ["#240305", "#56080b", "#820b0d"],
    snow: ["#27070a", "#5d1014", "#7d181b"],
    grassland: ["#260809", "#551112", "#711817"],
    victory: ["#420506", "#840c0e", "#b31412"],
    spirit: ["#420507", "#78090d", "#9c1113"],
  };

  const paintPolygon = (context, points, fillStyle) => {
    context.save();
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    });
    context.closePath();
    context.fillStyle = fillStyle;
    context.fill();
    context.restore();
  };

  const traceMountainLine = (context, points, strokeStyle, lineWidth = 1) => {
    context.save();
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    });
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.stroke();
    context.restore();
  };

  const drawStar = (context, centerX, centerY, outerRadius, alpha) => {
    const innerRadius = outerRadius * 0.42;
    const rotation = -Math.PI / 2;

    context.save();
    context.beginPath();

    for (let point = 0; point < 10; point += 1) {
      const radius = point % 2 === 0 ? outerRadius : innerRadius;
      const angle = rotation + (point * Math.PI) / 5;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      if (point === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    context.closePath();
    context.fillStyle = `rgba(255, 211, 67, ${alpha})`;
    context.shadowColor = "rgba(255, 196, 38, 0.34)";
    context.shadowBlur = outerRadius * 0.35;
    context.fill();
    context.restore();
  };

  const drawBattlefieldArtwork = (context) => {
    const rearRidge = [
      { x: 0, y: 930 },
      { x: 105, y: 838 },
      { x: 196, y: 895 },
      { x: 310, y: 770 },
      { x: 424, y: 882 },
      { x: 548, y: 798 },
      { x: 674, y: 900 },
      { x: 800, y: 826 },
    ];
    const frontRidge = [
      { x: 0, y: 1050 },
      { x: 124, y: 952 },
      { x: 245, y: 1016 },
      { x: 372, y: 900 },
      { x: 490, y: 1004 },
      { x: 626, y: 930 },
      { x: 800, y: 1024 },
    ];

    paintPolygon(
      context,
      [
        ...rearRidge,
        { x: POSTER_WIDTH, y: POSTER_HEIGHT },
        { x: 0, y: POSTER_HEIGHT },
      ],
      "rgba(24, 0, 2, 0.16)",
    );
    traceMountainLine(context, rearRidge, "rgba(255, 211, 67, 0.08)", 1.2);
    paintPolygon(
      context,
      [
        ...frontRidge,
        { x: POSTER_WIDTH, y: POSTER_HEIGHT },
        { x: 0, y: POSTER_HEIGHT },
      ],
      "rgba(12, 0, 1, 0.22)",
    );
    traceMountainLine(context, frontRidge, "rgba(255, 224, 137, 0.07)", 1);

    context.save();
    context.lineCap = "round";
    context.strokeStyle = "rgba(18, 0, 1, 0.12)";
    context.lineWidth = 56;
    context.beginPath();
    context.moveTo(18, 1170);
    context.bezierCurveTo(88, 1010, 88, 900, 178, 808);
    context.bezierCurveTo(224, 758, 222, 702, 266, 654);
    context.stroke();
    context.strokeStyle = "rgba(42, 0, 2, 0.09)";
    context.lineWidth = 28;
    context.beginPath();
    context.moveTo(142, 1200);
    context.bezierCurveTo(184, 1062, 172, 964, 254, 872);
    context.stroke();
    context.fillStyle = "rgba(25, 0, 1, 0.1)";
    [
      [65, 840, 67, 36],
      [180, 756, 84, 42],
      [112, 700, 52, 28],
      [245, 676, 44, 24],
    ].forEach(([x, y, radiusX, radiusY]) => {
      context.beginPath();
      context.ellipse(x, y, radiusX, radiusY, -0.22, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();

    context.save();
    context.fillStyle = "rgba(255, 211, 67, 0.15)";
    [
      [88, 1120, 2.2],
      [142, 1012, 1.6],
      [208, 1078, 2.4],
      [294, 1015, 1.5],
      [356, 1100, 1.8],
    ].forEach(([x, y, radius]) => {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  };

  const drawTurningPointArtwork = (context) => {
    const sourceX = 566;
    const sourceY = 88;
    const rayTargets = [
      { x: -30, y: 870, width: 46 },
      { x: 105, y: 1030, width: 34 },
      { x: 310, y: 1140, width: 28 },
      { x: 525, y: 1100, width: 24 },
      { x: 745, y: 930, width: 30 },
      { x: 840, y: 690, width: 34 },
    ];

    context.save();
    context.globalCompositeOperation = "screen";
    rayTargets.forEach((target, index) => {
      const angle = Math.atan2(target.y - sourceY, target.x - sourceX);
      const normalX = Math.cos(angle + Math.PI / 2) * target.width;
      const normalY = Math.sin(angle + Math.PI / 2) * target.width;
      const sourceSpread = 2 + index * 0.35;

      paintPolygon(
        context,
        [
          { x: sourceX - sourceSpread, y: sourceY },
          { x: sourceX + sourceSpread, y: sourceY },
          { x: target.x + normalX, y: target.y + normalY },
          { x: target.x - normalX, y: target.y - normalY },
        ],
        index % 2 === 0
          ? "rgba(255, 221, 117, 0.07)"
          : "rgba(255, 238, 183, 0.055)",
      );
    });
    context.restore();

    const glow = context.createRadialGradient(
      sourceX,
      sourceY,
      4,
      sourceX,
      sourceY,
      220,
    );
    glow.addColorStop(0, "rgba(255, 236, 170, 0.23)");
    glow.addColorStop(0.35, "rgba(255, 211, 67, 0.09)");
    glow.addColorStop(1, "rgba(255, 211, 67, 0)");
    context.fillStyle = glow;
    context.fillRect(300, 0, 500, 330);

    context.save();
    context.fillStyle = "rgba(38, 0, 2, 0.11)";
    [
      [438, 148, 122, 30, -0.06],
      [550, 182, 152, 34, 0.08],
      [645, 143, 102, 26, -0.1],
      [362, 198, 94, 22, 0.04],
    ].forEach(([x, y, radiusX, radiusY, rotation]) => {
      context.beginPath();
      context.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  };

  const strokeRiverRibbon = (context, width, color, offsetY = 0) => {
    context.save();
    context.beginPath();
    context.moveTo(-60, 435 + offsetY);
    context.bezierCurveTo(
      110,
      290 + offsetY,
      232,
      620 + offsetY,
      398,
      510 + offsetY,
    );
    context.bezierCurveTo(
      550,
      414 + offsetY,
      626,
      718 + offsetY,
      860,
      555 + offsetY,
    );
    context.strokeStyle = color;
    context.lineWidth = width;
    context.lineCap = "round";
    context.stroke();
    context.restore();
  };

  const drawAgileRiverArtwork = (context) => {
    strokeRiverRibbon(context, 42, "rgba(49, 0, 5, 0.13)", 0);
    strokeRiverRibbon(context, 7, "rgba(255, 211, 67, 0.09)", 0);
    strokeRiverRibbon(context, 32, "rgba(255, 228, 171, 0.045)", 174);
    strokeRiverRibbon(context, 4, "rgba(255, 211, 67, 0.07)", 174);
    strokeRiverRibbon(context, 25, "rgba(25, 0, 2, 0.11)", 338);
    strokeRiverRibbon(context, 3, "rgba(255, 238, 190, 0.06)", 338);

    context.save();
    context.strokeStyle = "rgba(255, 211, 67, 0.09)";
    context.lineWidth = 1;
    for (let index = 0; index < 4; index += 1) {
      context.beginPath();
      context.moveTo(78 + index * 26, 930 + index * 34);
      context.bezierCurveTo(
        242,
        858 + index * 30,
        390,
        1038 + index * 20,
        552,
        930 + index * 30,
      );
      context.bezierCurveTo(
        630,
        880 + index * 28,
        700,
        946 + index * 24,
        780,
        902 + index * 26,
      );
      context.stroke();
    }
    context.restore();
  };

  const drawGorgeArtwork = (context, theme) => {
    const leftCliff = [
      { x: 0, y: 166 },
      { x: 38, y: 238 },
      { x: 55, y: 355 },
      { x: 111, y: 462 },
      { x: 86, y: 583 },
      { x: 168, y: 704 },
      { x: 132, y: 825 },
      { x: 226, y: 938 },
      { x: 188, y: 1068 },
      { x: 272, y: 1200 },
      { x: 0, y: 1200 },
    ];
    const rightCliff = [
      { x: 800, y: 106 },
      { x: 756, y: 208 },
      { x: 748, y: 330 },
      { x: 676, y: 442 },
      { x: 712, y: 572 },
      { x: 632, y: 694 },
      { x: 664, y: 824 },
      { x: 574, y: 934 },
      { x: 614, y: 1070 },
      { x: 530, y: 1200 },
      { x: 800, y: 1200 },
    ];

    paintPolygon(context, leftCliff, "rgba(11, 0, 1, 0.2)");
    paintPolygon(context, rightCliff, "rgba(11, 0, 1, 0.2)");
    traceMountainLine(
      context,
      leftCliff.slice(0, 10),
      "rgba(255, 224, 137, 0.075)",
      1.1,
    );
    traceMountainLine(
      context,
      rightCliff.slice(0, 10),
      "rgba(255, 224, 137, 0.075)",
      1.1,
    );

    context.save();
    context.lineCap = "round";
    for (let index = 0; index < 6; index += 1) {
      context.beginPath();
      context.moveTo(260 + index * 8, 790 + index * 42);
      context.bezierCurveTo(
        340,
        748 + index * 38,
        420,
        868 + index * 30,
        500,
        808 + index * 40,
      );
      context.bezierCurveTo(
        534,
        782 + index * 38,
        552,
        782 + index * 38,
        580,
        796 + index * 38,
      );
      context.strokeStyle =
        index % 2 === 0
          ? "rgba(255, 240, 203, 0.08)"
          : "rgba(255, 211, 67, 0.07)";
      context.lineWidth = Math.max(1.2, 4.5 - index * 0.45);
      context.stroke();
    }
    context.restore();

    if (theme === "rapids") {
      context.save();
      context.strokeStyle = "rgba(22, 0, 2, 0.2)";
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(248, 724);
      context.quadraticCurveTo(400, 780, 556, 704);
      context.stroke();
      context.strokeStyle = "rgba(255, 211, 67, 0.1)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(248, 710);
      context.quadraticCurveTo(400, 766, 556, 690);
      context.stroke();
      for (let index = 0; index < 9; index += 1) {
        const x = 270 + index * 34;
        const topY = 724 + Math.sin((index / 8) * Math.PI) * 34;
        context.beginPath();
        context.moveTo(x, topY);
        context.lineTo(x, topY + 15);
        context.strokeStyle = "rgba(28, 0, 2, 0.16)";
        context.stroke();
      }
      context.restore();
    }
  };

  const drawSnowArtwork = (context) => {
    context.fillStyle = "rgba(111, 144, 158, 0.055)";
    context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    const rearPeaks = [
      { x: 0, y: 1110 },
      { x: 93, y: 968 },
      { x: 160, y: 1012 },
      { x: 278, y: 792 },
      { x: 370, y: 968 },
      { x: 472, y: 742 },
      { x: 585, y: 960 },
      { x: 706, y: 842 },
      { x: 800, y: 1050 },
    ];
    const frontPeaks = [
      { x: 0, y: 1200 },
      { x: 0, y: 1094 },
      { x: 126, y: 1018 },
      { x: 232, y: 1120 },
      { x: 348, y: 922 },
      { x: 468, y: 1104 },
      { x: 602, y: 956 },
      { x: 704, y: 1068 },
      { x: 800, y: 992 },
      { x: 800, y: 1200 },
    ];

    paintPolygon(
      context,
      [
        ...rearPeaks,
        { x: POSTER_WIDTH, y: POSTER_HEIGHT },
        { x: 0, y: POSTER_HEIGHT },
      ],
      "rgba(173, 195, 204, 0.09)",
    );
    paintPolygon(context, frontPeaks, "rgba(18, 24, 31, 0.15)");
    traceMountainLine(context, rearPeaks, "rgba(225, 242, 246, 0.13)", 1.1);
    traceMountainLine(context, frontPeaks.slice(1, 9), "rgba(223, 239, 243, 0.1)");

    context.save();
    context.fillStyle = "rgba(241, 250, 252, 0.13)";
    [
      [92, 360, 1.5],
      [158, 514, 1],
      [248, 412, 1.2],
      [687, 394, 1.4],
      [728, 602, 1],
      [582, 512, 0.9],
      [112, 694, 1.1],
      [656, 824, 1.2],
    ].forEach(([x, y, radius]) => {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  };

  const drawGrasslandArtwork = (context) => {
    context.fillStyle = "rgba(17, 35, 24, 0.11)";
    context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    context.save();
    for (let index = 0; index < 8; index += 1) {
      const y = 842 + index * 42;
      context.beginPath();
      context.moveTo(-30, y);
      context.bezierCurveTo(
        150,
        y - 32,
        284,
        y + 30,
        432,
        y - 8,
      );
      context.bezierCurveTo(
        572,
        y - 42,
        684,
        y + 24,
        830,
        y - 18,
      );
      context.strokeStyle =
        index % 2 === 0
          ? "rgba(10, 20, 13, 0.15)"
          : "rgba(210, 190, 125, 0.055)";
      context.lineWidth = index % 2 === 0 ? 4 : 1.2;
      context.stroke();
    }

    context.fillStyle = "rgba(6, 16, 10, 0.14)";
    [
      [102, 972, 83, 20, -0.08],
      [258, 1062, 110, 24, 0.05],
      [451, 978, 74, 17, -0.12],
      [598, 1090, 128, 26, 0.04],
    ].forEach(([x, y, radiusX, radiusY, rotation]) => {
      context.beginPath();
      context.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  };

  const drawFirework = (context, centerX, centerY, radius, alpha) => {
    context.save();
    context.strokeStyle = `rgba(255, 222, 126, ${alpha})`;
    context.lineWidth = 1.2;
    for (let index = 0; index < 14; index += 1) {
      const angle = (index / 14) * Math.PI * 2 + 0.08;
      const innerRadius = radius * 0.36;
      context.beginPath();
      context.moveTo(
        centerX + Math.cos(angle) * innerRadius,
        centerY + Math.sin(angle) * innerRadius,
      );
      context.lineTo(
        centerX + Math.cos(angle + 0.03) * radius,
        centerY + Math.sin(angle + 0.03) * radius,
      );
      context.stroke();
    }
    context.restore();
  };

  const drawVictoryArtwork = (context) => {
    drawFirework(context, 648, 112, 98, 0.13);
    drawFirework(context, 730, 244, 62, 0.09);

    context.save();
    context.strokeStyle = "rgba(255, 224, 137, 0.16)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(622, 1042);
    context.lineTo(622, 760);
    context.stroke();

    context.beginPath();
    context.moveTo(624, 772);
    context.bezierCurveTo(668, 748, 710, 790, 786, 758);
    context.lineTo(782, 886);
    context.bezierCurveTo(716, 914, 670, 866, 624, 902);
    context.closePath();
    context.fillStyle = "rgba(39, 0, 3, 0.2)";
    context.fill();
    context.strokeStyle = "rgba(255, 211, 67, 0.13)";
    context.lineWidth = 1.4;
    context.stroke();
    context.restore();

    const victoryGlow = context.createRadialGradient(
      710,
      166,
      20,
      710,
      166,
      430,
    );
    victoryGlow.addColorStop(0, "rgba(255, 216, 90, 0.09)");
    victoryGlow.addColorStop(1, "rgba(255, 216, 90, 0)");
    context.fillStyle = victoryGlow;
    context.fillRect(250, 0, 550, 590);
  };

  const drawOverviewArtwork = (context) => {
    const ridge = [
      { x: 0, y: 1048 },
      { x: 104, y: 950 },
      { x: 218, y: 1012 },
      { x: 344, y: 862 },
      { x: 472, y: 996 },
      { x: 598, y: 900 },
      { x: 712, y: 1002 },
      { x: 800, y: 936 },
    ];
    paintPolygon(
      context,
      [
        ...ridge,
        { x: POSTER_WIDTH, y: POSTER_HEIGHT },
        { x: 0, y: POSTER_HEIGHT },
      ],
      "rgba(20, 0, 2, 0.14)",
    );
    traceMountainLine(context, ridge, "rgba(255, 211, 67, 0.09)", 1.1);

    context.save();
    context.strokeStyle = "rgba(255, 211, 67, 0.2)";
    context.lineWidth = 2.2;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(82, 972);
    context.bezierCurveTo(155, 842, 258, 906, 310, 780);
    context.bezierCurveTo(374, 628, 458, 722, 522, 606);
    context.bezierCurveTo(602, 458, 656, 568, 732, 386);
    context.stroke();
    context.strokeStyle = "rgba(255, 245, 206, 0.09)";
    context.lineWidth = 6;
    context.stroke();
    context.restore();

    [
      [82, 972],
      [310, 780],
      [522, 606],
      [732, 386],
    ].forEach(([x, y]) => {
      drawStar(context, x, y, 8, 0.16);
    });
  };

  const drawSpiritArtwork = (context) => {
    context.save();
    context.strokeStyle = "rgba(255, 211, 67, 0.08)";
    context.lineWidth = 1.2;
    context.beginPath();
    context.arc(400, 618, 280, 0.08, Math.PI * 1.82);
    context.stroke();
    context.beginPath();
    context.arc(400, 618, 224, Math.PI * 0.15, Math.PI * 1.7);
    context.stroke();
    context.restore();
  };

  const drawThemeArtwork = (context, theme) => {
    const artworkDrawers = {
      overview: drawOverviewArtwork,
      battlefield: drawBattlefieldArtwork,
      "turning-point": drawTurningPointArtwork,
      "agile-river": drawAgileRiverArtwork,
      gorge: (artworkContext) => drawGorgeArtwork(artworkContext, "gorge"),
      rapids: (artworkContext) => drawGorgeArtwork(artworkContext, "rapids"),
      snow: drawSnowArtwork,
      grassland: drawGrasslandArtwork,
      victory: drawVictoryArtwork,
      spirit: drawSpiritArtwork,
    };

    artworkDrawers[theme]?.(context);
  };

  const drawSpacedText = (context, text, centerX, y, spacing) => {
    const characters = Array.from(text);
    const textWidth =
      characters.reduce(
        (width, character) => width + context.measureText(character).width,
        0,
      ) +
      spacing * Math.max(0, characters.length - 1);
    let x = centerX - textWidth / 2;

    characters.forEach((character) => {
      context.fillText(character, x, y);
      x += context.measureText(character).width + spacing;
    });
  };

  const wrapParagraph = (context, text, maxWidth) => {
    const characters = Array.from(text);
    const lines = [];
    let currentLine = "";

    characters.forEach((character) => {
      const candidate = `${currentLine}${character}`;

      if (!currentLine || context.measureText(candidate).width <= maxWidth) {
        currentLine = candidate;
        return;
      }

      if (
        LINE_BREAK_FORBIDDEN_START.includes(character) &&
        currentLine.length > 1
      ) {
        const movedCharacter = currentLine.slice(-1);
        const completedLine = currentLine.slice(0, -1).trimEnd();
        lines.push(completedLine);
        currentLine = `${movedCharacter}${character}`;
        return;
      }

      if (LINE_BREAK_FORBIDDEN_END.includes(currentLine.slice(-1))) {
        const movedCharacter = currentLine.slice(-1);
        const completedLine = currentLine.slice(0, -1).trimEnd();
        lines.push(completedLine);
        currentLine = `${movedCharacter}${character}`;
        return;
      }

      lines.push(currentLine.trimEnd());
      currentLine = character === " " ? "" : character;
    });

    if (currentLine.trim()) {
      lines.push(currentLine.trimEnd());
    }

    return lines;
  };

  const buildTextLayout = (context, paragraphs, fontSize) => {
    const lineHeight = fontSize * 1.64;
    const paragraphGap = fontSize * 0.52;
    const maxWidth = 656;
    context.font = `400 ${fontSize}px ${BODY_FONT}`;

    const blocks = paragraphs.map((paragraph) => ({
      lines: wrapParagraph(context, paragraph, maxWidth),
      lineHeight,
    }));
    const totalHeight =
      blocks.reduce(
        (height, block) => height + block.lines.length * block.lineHeight,
        0,
      ) +
      paragraphGap * Math.max(0, blocks.length - 1);

    return {
      blocks,
      fontSize,
      lineHeight,
      paragraphGap,
      totalHeight,
    };
  };

  const fitTextLayout = (context, paragraphs) => {
    const availableHeight = 768;

    for (let fontSize = 21; fontSize >= 14.5; fontSize -= 0.25) {
      const layout = buildTextLayout(context, paragraphs, fontSize);

      if (layout.totalHeight <= availableHeight) {
        return layout;
      }
    }

    return buildTextLayout(context, paragraphs, 14.5);
  };

  const drawPoster = async ({ title, paragraphs, theme }) => {
    const canvas = document.createElement("canvas");
    canvas.width = POSTER_WIDTH;
    canvas.height = POSTER_HEIGHT;
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas is unavailable.");
    }

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const palette = POSTER_PALETTES[theme] || POSTER_PALETTES.overview;
    const background = context.createLinearGradient(
      POSTER_WIDTH,
      0,
      0,
      POSTER_HEIGHT,
    );
    background.addColorStop(0, palette[0]);
    background.addColorStop(0.48, palette[1]);
    background.addColorStop(1, palette[2]);
    context.fillStyle = background;
    context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    const upperGlow = context.createRadialGradient(650, 120, 20, 650, 120, 460);
    upperGlow.addColorStop(
      0,
      theme === "victory"
        ? "rgba(255, 219, 107, 0.27)"
        : "rgba(255, 211, 67, 0.18)",
    );
    upperGlow.addColorStop(0.45, "rgba(177, 14, 17, 0.08)");
    upperGlow.addColorStop(1, "rgba(66, 5, 7, 0)");
    context.fillStyle = upperGlow;
    context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    const lowerGlow = context.createRadialGradient(80, 1120, 10, 80, 1120, 520);
    lowerGlow.addColorStop(0, "rgba(255, 211, 67, 0.1)");
    lowerGlow.addColorStop(1, "rgba(66, 5, 7, 0)");
    context.fillStyle = lowerGlow;
    context.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

    context.save();
    context.globalAlpha = 0.052;
    context.strokeStyle = "#ffe79a";
    context.lineWidth = 1;

    for (let x = -350; x < POSTER_WIDTH + 350; x += 92) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + 430, POSTER_HEIGHT);
      context.stroke();
    }

    context.restore();
    drawThemeArtwork(context, theme);

    context.save();
    context.strokeStyle = "rgba(255, 224, 137, 0.26)";
    context.lineWidth = 1;
    context.strokeRect(30.5, 30.5, POSTER_WIDTH - 61, POSTER_HEIGHT - 61);
    context.restore();

    drawStar(context, 696, 116, 104, theme === "victory" ? 0.11 : 0.075);
    drawStar(context, 626, 210, 27, 0.18);
    drawStar(context, 722, 942, 62, 0.09);
    drawStar(context, 91, 1024, 36, 0.075);

    context.save();
    context.textAlign = "center";
    context.textBaseline = "alphabetic";
    context.fillStyle = "#f6d578";
    context.font = `700 14px ${BODY_FONT}`;
    context.shadowColor = "rgba(36, 0, 0, 0.3)";
    context.shadowBlur = 4;
    drawSpacedText(context, "LONG MARCH · SCENES OF FAITH", 400, 92, 3.2);

    let titleFontSize = 68;
    context.font = `700 ${titleFontSize}px ${DISPLAY_FONT}`;
    while (context.measureText(title).width > 666 && titleFontSize > 40) {
      titleFontSize -= 1;
      context.font = `700 ${titleFontSize}px ${DISPLAY_FONT}`;
    }

    context.fillStyle = "#fff5d5";
    context.shadowColor = "rgba(36, 0, 0, 0.52)";
    context.shadowBlur = 10;
    context.fillText(title, 400, 174);

    context.fillStyle = "rgba(255, 238, 189, 0.78)";
    context.font = `400 16px ${BODY_FONT}`;
    context.shadowBlur = 3;
    drawSpacedText(
      context,
      POSTER_CAPTIONS[theme] || POSTER_CAPTIONS.overview,
      400,
      206,
      2.4,
    );

    const titleRule = context.createLinearGradient(330, 0, 470, 0);
    titleRule.addColorStop(0, "rgba(255, 211, 67, 0)");
    titleRule.addColorStop(0.5, "rgba(255, 211, 67, 0.9)");
    titleRule.addColorStop(1, "rgba(255, 211, 67, 0)");
    context.fillStyle = titleRule;
    context.fillRect(330, 226, 140, 2);
    context.restore();

    const layout = fitTextLayout(context, paragraphs);
    const contentTop = 249;
    const availableHeight = 768;
    const remainingSpace = Math.max(0, availableHeight - layout.totalHeight);
    const lineGap = layout.paragraphGap;
    let cursorY = contentTop + Math.min(150, remainingSpace * 0.3);

    context.save();
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillStyle = "rgba(255, 253, 244, 0.94)";
    context.font = `400 ${layout.fontSize}px ${BODY_FONT}`;
    context.shadowColor = "rgba(31, 0, 0, 0.32)";
    context.shadowBlur = 3;
    context.shadowOffsetY = 1;

    layout.blocks.forEach((block, blockIndex) => {
      block.lines.forEach((line) => {
        context.fillText(line, POSTER_WIDTH / 2, cursorY);
        cursorY += layout.lineHeight;
      });

      if (blockIndex < layout.blocks.length - 1) {
        cursorY += lineGap;
      }
    });
    context.restore();

    context.save();
    const footerRule = context.createLinearGradient(0, 0, POSTER_WIDTH, 0);
    footerRule.addColorStop(0, "rgba(255, 211, 67, 0)");
    footerRule.addColorStop(0.18, "rgba(255, 211, 67, 0.42)");
    footerRule.addColorStop(0.82, "rgba(255, 211, 67, 0.42)");
    footerRule.addColorStop(1, "rgba(255, 211, 67, 0)");
    context.fillStyle = footerRule;
    context.fillRect(64, 1050, POSTER_WIDTH - 128, 1);

    context.textAlign = "center";
    context.fillStyle = "#f8dc8a";
    context.font = `700 20px ${DISPLAY_FONT}`;
    context.fillText("—— 循迹·传薪 · 长征专题", POSTER_WIDTH / 2, 1088);

    const pageUrl = window.location.href.split("#")[0];
    let urlFontSize = 14;
    context.font = `400 ${urlFontSize}px ${BODY_FONT}`;

    while (
      context.measureText(pageUrl).width > POSTER_WIDTH - 150 &&
      urlFontSize > 10
    ) {
      urlFontSize -= 0.5;
      context.font = `400 ${urlFontSize}px ${BODY_FONT}`;
    }

    context.fillStyle = "rgba(255, 249, 229, 0.72)";
    context.fillText(pageUrl, POSTER_WIDTH / 2, 1128);
    context.restore();

    return canvas;
  };

  posterButtons.forEach((posterButton) => {
    const card = posterButton.closest(".march-card");
    const heading = card?.querySelector(".march-card__body h3");
    const paragraphs = Array.from(
      card?.querySelectorAll(".march-card__body > p") || [],
    )
      .map((paragraph) => paragraph.textContent.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    if (!card || !heading || !paragraphs.length) {
      posterButton.hidden = true;
      return;
    }

    const title = heading.textContent.replace(/\s+/g, " ").trim();
    const theme = posterButton.dataset.marchPosterArt || "overview";
    const safeTitle = title.replace(/[\\/:*?"<>|]/g, "-");
    const fileName = `${safeTitle}-循迹·传薪.png`;

    posterButton.addEventListener("click", async () => {
      posterButton.disabled = true;
      posterButton.setAttribute("aria-busy", "true");

      try {
        const canvas = await drawPoster({ title, paragraphs, theme });

        try {
          window.localStorage.setItem(
            LEARNING_PROGRESS_KEYS.poster,
            JSON.stringify({
              generatedAt: new Date().toISOString(),
              title,
            }),
          );
          notifyLearningProgressChanged();
        } catch {
          // Preview and download still work when progress storage is unavailable.
        }

        generatedAssetPreview.open({
          dataUrl: canvas.toDataURL("image/png"),
          fileName,
          title: `${title} · 金句海报`,
          eyebrow: "Long March Poster",
          caption: "确认画面后，再点击下方按钮保存到本地",
          alt: `${title}长征金句海报预览`,
        });
      } catch (error) {
        console.error("Failed to generate the Long March poster.", error);
        window.alert("海报生成失败，请稍后重试。");
      } finally {
        posterButton.disabled = false;
        posterButton.removeAttribute("aria-busy");
      }
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMarchPosterGenerator, {
    once: true,
  });
} else {
  initializeMarchPosterGenerator();
}

const initializeMarchBadge = () => {
  const badgeModule = document.querySelector("[data-march-badge-module]");
  const claimButton = document.querySelector("[data-claim-march-badge]");
  const badgeModal = document.querySelector("[data-badge-modal]");

  if (
    !badgeModule ||
    !claimButton ||
    !badgeModal ||
    !generatedAssetPreview
  ) {
    return;
  }

  const BADGE_SIZE = 800;
  const badgeCanvas = document.createElement("canvas");
  badgeCanvas.width = BADGE_SIZE;
  badgeCanvas.height = BADGE_SIZE;
  const badgeContext = badgeCanvas.getContext("2d");

  if (!badgeContext) {
    claimButton.hidden = true;
    return;
  }

  const BADGE_STORAGE_KEY = "xunji-long-march-badge-v1";
  const BADGE_CLAIM_STORAGE_KEY = "has_claimed_badge";
  const BADGE_CLAIM_TOKEN_VERSION = "v1";
  const BADGE_CLAIM_PEPPER = "xunji-chuanxin-long-march-2026";
  const statusNode = badgeModule.querySelector("[data-badge-status]");
  const messageNode = badgeModule.querySelector("[data-badge-message]");
  const buttonLabelNode = badgeModule.querySelector(
    "[data-badge-button-label]",
  );
  const hintNode = badgeModule.querySelector("[data-badge-hint]");
  let claimedRecord = null;

  const createSerial = () => {
    const year = new Date().getFullYear();
    let suffix;

    if (window.crypto?.getRandomValues) {
      const randomValues = new Uint32Array(1);
      window.crypto.getRandomValues(randomValues);
      suffix = randomValues[0] % 10000;
    } else {
      suffix = Math.floor(Math.random() * 10000);
    }

    return `NO. ${year}${String(suffix).padStart(4, "0")}`;
  };

  const isValidBadgeRecord = (record) =>
    Boolean(
      record &&
        typeof record.serial === "string" &&
        /^NO\. \d{8}$/.test(record.serial) &&
        typeof record.claimedAt === "string" &&
        Number.isFinite(new Date(record.claimedAt).getTime()),
    );

  const formatBadgeClaimDate = (claimedAt) => {
    const date = new Date(claimedAt);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("");
  };

  const hashBadgeClaimPayload = (payload) => {
    let hash = 2166136261;

    for (let index = 0; index < payload.length; index += 1) {
      hash ^= payload.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    return (hash >>> 0).toString(16).padStart(8, "0");
  };

  const createBadgeClaimToken = (record) => {
    if (!isValidBadgeRecord(record)) {
      return "";
    }

    const claimDate = formatBadgeClaimDate(record.claimedAt);
    const serialDigits = record.serial.slice(4);
    const signature = hashBadgeClaimPayload(
      [
        BADGE_CLAIM_TOKEN_VERSION,
        claimDate,
        serialDigits,
        record.claimedAt,
        BADGE_CLAIM_PEPPER,
      ].join("|"),
    );

    return `claimed_${BADGE_CLAIM_TOKEN_VERSION}_${claimDate}_${serialDigits}_${signature}`;
  };

  const isValidBadgeClaimToken = (token, record) => {
    const expectedToken = createBadgeClaimToken(record);
    return Boolean(expectedToken && token === expectedToken);
  };

  const readClaimedBadgeRecord = () => {
    try {
      const storedRecord = JSON.parse(
        window.localStorage.getItem(BADGE_STORAGE_KEY) || "null",
      );

      if (!isValidBadgeRecord(storedRecord)) {
        return null;
      }

      const storedClaimToken = window.localStorage.getItem(
        BADGE_CLAIM_STORAGE_KEY,
      );

      if (storedClaimToken === null) {
        window.localStorage.setItem(
          BADGE_CLAIM_STORAGE_KEY,
          createBadgeClaimToken(storedRecord),
        );
        return storedRecord;
      }

      return isValidBadgeClaimToken(storedClaimToken, storedRecord)
        ? storedRecord
        : null;
    } catch {
      return null;
    }
  };

  const updateBadgeUi = () => {
    const isClaimed = isValidBadgeRecord(claimedRecord);
    badgeModule.classList.toggle("is-claimed", isClaimed);

    if (isClaimed) {
      statusNode.textContent = "已领取";
      messageNode.textContent = `你已领取长征传承徽章，荣誉编号 ${claimedRecord.serial}。点击可再次预览或保存图片。`;
      buttonLabelNode.textContent = "查看我的专属徽章";
      hintNode.textContent = `徽章编号 ${claimedRecord.serial} 已保存在本机。`;
      claimButton.setAttribute("aria-label", "查看我的长征传承徽章");
      return;
    }

    statusNode.textContent = "待领取";
    messageNode.textContent =
      "恭喜你走完长征路。点击领取你的专属荣誉，让坚定信念与奋进力量在新的征程中继续传递。";
    buttonLabelNode.textContent = "领取专属徽章";
    hintNode.textContent = "首次领取将生成专属编号，并可在预览中保存图片。";
    claimButton.setAttribute("aria-label", "领取长征传承徽章");
  };

  claimedRecord = readClaimedBadgeRecord();
  updateBadgeUi();

  const traceStar = (centerX, centerY, outerRadius, innerRadius) => {
    badgeContext.beginPath();

    for (let index = 0; index < 10; index += 1) {
      const radius = index % 2 === 0 ? outerRadius : innerRadius;
      const angle = -Math.PI / 2 + (index * Math.PI) / 5;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      if (index === 0) {
        badgeContext.moveTo(x, y);
      } else {
        badgeContext.lineTo(x, y);
      }
    }

    badgeContext.closePath();
  };

  const drawMarchRoutePattern = () => {
    const routeSegments = [
      {
        start: [620, 660],
        control1: [580, 620],
        control2: [550, 575],
        end: [495, 535],
      },
      {
        start: [495, 535],
        control1: [435, 490],
        control2: [355, 475],
        end: [330, 420],
      },
      {
        start: [330, 420],
        control1: [295, 360],
        control2: [360, 315],
        end: [415, 280],
      },
      {
        start: [415, 280],
        control1: [470, 245],
        control2: [420, 205],
        end: [345, 185],
      },
      {
        start: [345, 185],
        control1: [290, 168],
        control2: [240, 150],
        end: [190, 120],
      },
    ];
    const routeNodes = [
      { segment: 0, time: 0.2 },
      { segment: 0, time: 0.9 },
      { segment: 1, time: 0.9 },
      { segment: 3, time: 0.88 },
      { segment: 4, time: 0.78 },
    ];
    const pointOnSegment = (segment, time) => {
      const inverse = 1 - time;
      const weights = [
        inverse ** 3,
        3 * inverse ** 2 * time,
        3 * inverse * time ** 2,
        time ** 3,
      ];
      const points = [
        segment.start,
        segment.control1,
        segment.control2,
        segment.end,
      ];

      return {
        x: points.reduce(
          (sum, point, index) => sum + point[0] * weights[index],
          0,
        ),
        y: points.reduce(
          (sum, point, index) => sum + point[1] * weights[index],
          0,
        ),
      };
    };

    const routePath = new Path2D();
    routePath.moveTo(...routeSegments[0].start);

    routeSegments.forEach((segment) => {
      routePath.bezierCurveTo(
        ...segment.control1,
        ...segment.control2,
        ...segment.end,
      );
    });

    badgeContext.save();
    badgeContext.strokeStyle = "rgba(218, 172, 61, 0.34)";
    badgeContext.lineWidth = 1.7;
    badgeContext.lineCap = "round";
    badgeContext.lineJoin = "round";
    badgeContext.shadowColor = "rgba(255, 211, 67, 0.2)";
    badgeContext.shadowBlur = 6;
    badgeContext.stroke(routePath);
    badgeContext.shadowBlur = 0;

    routeNodes.forEach((node) => {
      const point = pointOnSegment(
        routeSegments[node.segment],
        node.time,
      );
      badgeContext.beginPath();
      badgeContext.arc(point.x, point.y, 6, 0, Math.PI * 2);
      badgeContext.fillStyle = "rgba(255, 218, 105, 0.1)";
      badgeContext.fill();
      badgeContext.beginPath();
      badgeContext.arc(point.x, point.y, 2.7, 0, Math.PI * 2);
      badgeContext.fillStyle = "rgba(247, 203, 81, 0.72)";
      badgeContext.shadowColor = "rgba(255, 216, 96, 0.66)";
      badgeContext.shadowBlur = 9;
      badgeContext.fill();
      badgeContext.shadowBlur = 0;
    });

    badgeContext.restore();
  };

  const drawBadge = (record) => {
    const { serial } = record;
    const centerX = 400;
    const centerY = 400;
    const circleRadius = 360;
    badgeContext.clearRect(0, 0, BADGE_SIZE, BADGE_SIZE);

    const background = badgeContext.createRadialGradient(
      330,
      255,
      30,
      centerX,
      centerY,
      500,
    );
    background.addColorStop(0, "#c71f1f");
    background.addColorStop(0.38, "#981010");
    background.addColorStop(0.72, "#700707");
    background.addColorStop(1, "#310101");

    badgeContext.save();
    badgeContext.beginPath();
    badgeContext.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
    badgeContext.shadowColor = "rgba(44, 2, 2, 0.46)";
    badgeContext.shadowBlur = 30;
    badgeContext.shadowOffsetY = 12;
    badgeContext.fillStyle = background;
    badgeContext.fill();
    badgeContext.restore();

    badgeContext.save();
    badgeContext.beginPath();
    badgeContext.arc(centerX, centerY, circleRadius - 5, 0, Math.PI * 2);
    badgeContext.clip();

    const innerLight = badgeContext.createRadialGradient(
      305,
      235,
      20,
      400,
      415,
      415,
    );
    innerLight.addColorStop(0, "rgba(255, 227, 143, 0.12)");
    innerLight.addColorStop(0.48, "rgba(255, 255, 255, 0)");
    innerLight.addColorStop(1, "rgba(26, 0, 0, 0.3)");
    badgeContext.fillStyle = innerLight;
    badgeContext.fillRect(0, 0, BADGE_SIZE, BADGE_SIZE);

    badgeContext.translate(centerX, 370);
    badgeContext.strokeStyle = "rgba(255, 211, 67, 0.07)";
    badgeContext.lineWidth = 2;

    for (let index = 0; index < 16; index += 1) {
      badgeContext.rotate((Math.PI * 2) / 16);
      badgeContext.beginPath();
      badgeContext.moveTo(205, 0);
      badgeContext.lineTo(index % 2 === 0 ? 322 : 292, 0);
      badgeContext.stroke();
    }

    badgeContext.restore();

    let seed = Array.from(serial).reduce(
      (value, character) => (value * 31 + character.charCodeAt(0)) % 2147483647,
      17,
    );
    const nextRandom = () => {
      seed = (seed * 48271) % 2147483647;
      return seed / 2147483647;
    };

    for (let index = 0; index < 46; index += 1) {
      const x = 65 + nextRandom() * 670;
      const y = 65 + nextRandom() * 670;
      const radius = 0.7 + nextRandom() * 1.8;
      badgeContext.fillStyle = `rgba(255, 224, 115, ${0.035 + nextRandom() * 0.09})`;
      badgeContext.beginPath();
      badgeContext.arc(x, y, radius, 0, Math.PI * 2);
      badgeContext.fill();
    }

    const goldGradient = badgeContext.createLinearGradient(60, 50, 740, 755);
    goldGradient.addColorStop(0, "#fff9d8");
    goldGradient.addColorStop(0.24, "#ffe779");
    goldGradient.addColorStop(0.52, "#f2b92f");
    goldGradient.addColorStop(0.76, "#a96d05");
    goldGradient.addColorStop(1, "#ffe89a");

    badgeContext.save();
    badgeContext.beginPath();
    badgeContext.arc(centerX, centerY, 353, 0, Math.PI * 2);
    badgeContext.strokeStyle = goldGradient;
    badgeContext.lineWidth = 14;
    badgeContext.stroke();

    badgeContext.restore();
    drawMarchRoutePattern();

    badgeContext.save();
    badgeContext.textAlign = "center";
    badgeContext.textBaseline = "middle";
    badgeContext.fillStyle = goldGradient;
    badgeContext.font =
      '800 40px "Noto Serif SC", "Songti SC", "SimSun", serif';

    const title = Array.from("长征精神传承者");
    const titleArcSpan = 2.12;
    const titleRadius = 297;
    const titleStartAngle = -Math.PI / 2 - titleArcSpan / 2;
    const titleStep = titleArcSpan / (title.length - 1);

    title.forEach((character, index) => {
      const angle = titleStartAngle + titleStep * index;
      badgeContext.save();
      badgeContext.translate(centerX, centerY);
      badgeContext.rotate(angle + Math.PI / 2);
      badgeContext.fillText(character, 0, -titleRadius);
      badgeContext.restore();
    });

    const starGradient = badgeContext.createRadialGradient(
      348,
      288,
      18,
      centerX,
      378,
      184,
    );
    starGradient.addColorStop(0, "#fffde9");
    starGradient.addColorStop(0.2, "#fff08b");
    starGradient.addColorStop(0.48, "#ffd343");
    starGradient.addColorStop(0.76, "#e4a51c");
    starGradient.addColorStop(1, "#a76b04");

    badgeContext.shadowColor = "rgba(255, 211, 67, 0.46)";
    badgeContext.shadowBlur = 22;
    traceStar(centerX, 378, 158, 62);
    badgeContext.fillStyle = starGradient;
    badgeContext.fill();
    badgeContext.shadowBlur = 0;
    traceStar(centerX, 378, 158, 62);
    badgeContext.strokeStyle = "rgba(255, 250, 218, 0.88)";
    badgeContext.lineWidth = 3;
    badgeContext.stroke();

    badgeContext.shadowColor = "rgba(255, 211, 67, 0.22)";
    badgeContext.shadowBlur = 8;
    badgeContext.fillStyle = "#ffe98f";
    badgeContext.font =
      '800 32px "Noto Serif SC", "Songti SC", "SimSun", serif';
    badgeContext.fillText("循迹·传薪", centerX, 584);
    badgeContext.shadowBlur = 0;

    badgeContext.textAlign = "left";
    badgeContext.fillStyle = "rgba(255, 237, 174, 0.62)";
    badgeContext.font =
      '600 17px "Microsoft YaHei", "PingFang SC", sans-serif';
    badgeContext.fillText("1934 — 1936", 226, 672);

    badgeContext.textAlign = "right";
    badgeContext.fillStyle = "rgba(255, 237, 174, 0.62)";
    badgeContext.font =
      '700 17px "Microsoft YaHei", "PingFang SC", sans-serif';
    badgeContext.fillText(serial, 574, 672);
    badgeContext.restore();
  };

  const persistBadgeRecord = (record) => {
    claimedRecord = record;

    try {
      window.localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify(record));
      window.localStorage.setItem(
        BADGE_CLAIM_STORAGE_KEY,
        createBadgeClaimToken(record),
      );
      notifyLearningProgressChanged();
    } catch {
      // The badge still works for this visit when storage is unavailable.
    }

    updateBadgeUi();
  };

  const openBadgeModal = () => {
    claimButton.disabled = true;
    claimButton.setAttribute("aria-busy", "true");

    try {
      const isNewClaim = !isValidBadgeRecord(claimedRecord);
      const record = isNewClaim
        ? { serial: createSerial(), claimedAt: new Date().toISOString() }
        : claimedRecord;

      drawBadge(record);

      if (isNewClaim) {
        persistBadgeRecord(record);
      }

      generatedAssetPreview.open({
        dataUrl: badgeCanvas.toDataURL("image/png"),
        fileName: "长征传承徽章.png",
        title: "你的长征传承徽章",
        eyebrow: "Long March Heritage",
        caption: `专属编号 ${record.serial}`,
        alt: `长征精神传承者专属徽章预览，编号 ${record.serial}`,
      });
    } catch (error) {
      console.error("Failed to generate the Long March badge.", error);
      window.alert("徽章生成失败，请稍后重试。");
    } finally {
      claimButton.disabled = false;
      claimButton.removeAttribute("aria-busy");
    }
  };

  claimButton.addEventListener("click", openBadgeModal);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMarchBadge, {
    once: true,
  });
} else {
  initializeMarchBadge();
}

const initializeReadAloud = () => {
  if (document.querySelector("[data-read-aloud]")) {
    return;
  }

  const READ_ALOUD_POSITION_STORAGE_KEY =
    "xunji-read-aloud-button-position-v1";
  const READ_ALOUD_DRAG_THRESHOLD = 10;
  const isSpeechSupported = () =>
    typeof window.speechSynthesis?.speak === "function" &&
    typeof window.SpeechSynthesisUtterance === "function";
  const RATE_OPTIONS = [0.5, 1, 1.5];
  const state = {
    paragraphs: [],
    index: 0,
    rate: 1,
    status: "idle",
    session: 0,
    utterance: null,
    panelOpen: false,
  };
  let seekTimer = null;
  let resumeAfterSeek = false;
  let dragState = null;
  let launcherDragState = null;
  let suppressLauncherClick = false;

  const button = document.createElement("button");
  button.className = "read-aloud-button";
  button.type = "button";
  button.dataset.readAloud = "";
  button.setAttribute("aria-label", "打开语音朗读控制面板");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "read-aloud-panel");
  button.title = "打开语音朗读控制面板";
  button.innerHTML = `
    <svg class="read-aloud-button__speaker" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" stroke="none" d="M4.5 9.5h3.2l4.1-3.25c.5-.4 1.2-.04 1.2.6v10.3c0 .64-.7 1-1.2.6l-4.1-3.25H4.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5Z"></path>
      <path d="M15.5 9a4.2 4.2 0 0 1 0 6"></path>
      <path d="M18.3 6.7a7.5 7.5 0 0 1 0 10.6"></path>
    </svg>
    <svg class="read-aloud-button__pause" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="6" width="3.5" height="12" rx="1" fill="currentColor" stroke="none"></rect>
      <rect x="13.5" y="6" width="3.5" height="12" rx="1" fill="currentColor" stroke="none"></rect>
    </svg>
  `;

  const panel = document.createElement("section");
  panel.id = "read-aloud-panel";
  panel.className = "read-aloud-panel";
  panel.dataset.readAloudPanel = "";
  panel.setAttribute("aria-label", "页面语音朗读控制面板");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="read-aloud-panel__header" data-reader-drag-handle title="按住拖动播放面板">
      <div class="read-aloud-panel__identity">
        <span class="read-aloud-panel__eyebrow">页面听书</span>
        <strong class="read-aloud-panel__status" data-reader-status>准备朗读</strong>
      </div>
      <button class="read-aloud-panel__close" type="button" data-reader-close aria-label="关闭朗读面板">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m7 7 10 10M17 7 7 17"></path>
        </svg>
      </button>
    </div>
    <div class="read-aloud-panel__progress-row">
      <input
        class="read-aloud-panel__progress"
        data-reader-progress
        type="range"
        min="0"
        max="0"
        value="0"
        step="1"
        aria-label="朗读进度"
      >
      <span class="read-aloud-panel__count" data-reader-count>0 / 0</span>
    </div>
    <div class="read-aloud-panel__controls">
      <button class="read-aloud-panel__play" type="button" data-reader-play aria-label="开始朗读">
        <svg class="read-aloud-panel__play-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 6 9 6-9 6Z"></path>
        </svg>
        <svg class="read-aloud-panel__pause-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="6" width="3.5" height="12" rx="1"></rect>
          <rect x="13.5" y="6" width="3.5" height="12" rx="1"></rect>
        </svg>
      </button>
      <div class="read-aloud-panel__rates" role="group" aria-label="朗读语速">
        <span>语速</span>
        ${RATE_OPTIONS.map(
          (rate) =>
            `<button type="button" data-reader-rate="${rate}" aria-pressed="${
              rate === state.rate
            }">${rate.toFixed(1)}x</button>`,
        ).join("")}
      </div>
    </div>
  `;
  document.body.append(button, panel);

  const statusElement = panel.querySelector("[data-reader-status]");
  const progressInput = panel.querySelector("[data-reader-progress]");
  const countElement = panel.querySelector("[data-reader-count]");
  const playButton = panel.querySelector("[data-reader-play]");
  const closeButton = panel.querySelector("[data-reader-close]");
  const dragHandle = panel.querySelector("[data-reader-drag-handle]");
  const rateButtons = Array.from(
    panel.querySelectorAll("[data-reader-rate]"),
  );

  const clampLauncherCoordinate = (value, maximum) => {
    const margin = 8;
    return Math.max(
      margin,
      Math.min(
        Number.isFinite(value) ? value : margin,
        Math.max(margin, maximum),
      ),
    );
  };

  const setLauncherPosition = (left, top, { persist = false } = {}) => {
    const margin = 8;
    const maxLeft = window.innerWidth - button.offsetWidth - margin;
    const maxTop = window.innerHeight - button.offsetHeight - margin;
    const nextLeft = clampLauncherCoordinate(Number(left), maxLeft);
    const nextTop = clampLauncherCoordinate(Number(top), maxTop);

    button.style.left = `${nextLeft}px`;
    button.style.top = `${nextTop}px`;
    button.style.right = "auto";
    button.style.bottom = "auto";

    if (persist) {
      try {
        window.localStorage.setItem(
          READ_ALOUD_POSITION_STORAGE_KEY,
          JSON.stringify({ left: nextLeft, top: nextTop }),
        );
      } catch {
        // Dragging still works when storage is unavailable.
      }
    }
  };

  const restoreLauncherPosition = () => {
    try {
      const storedPosition = JSON.parse(
        window.localStorage.getItem(READ_ALOUD_POSITION_STORAGE_KEY) || "null",
      );

      if (
        Number.isFinite(Number(storedPosition?.left)) &&
        Number.isFinite(Number(storedPosition?.top))
      ) {
        setLauncherPosition(storedPosition.left, storedPosition.top);
      }
    } catch {
      // Invalid or unavailable storage falls back to the original CSS position.
    }
  };

  const keepLauncherInViewport = () => {
    if (!button.style.left) {
      return;
    }

    const rect = button.getBoundingClientRect();
    setLauncherPosition(rect.left, rect.top, { persist: true });
  };

  const startLauncherDrag = (event) => {
    if (event.button > 0 || event.isPrimary === false) {
      return;
    }

    // A new physical interaction is never part of the previous drag gesture.
    suppressLauncherClick = false;
    const rect = button.getBoundingClientRect();
    launcherDragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: rect.left,
      startTop: rect.top,
      dragged: false,
    };

    try {
      button.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is an enhancement; move events still work without it.
    }
  };

  const moveLauncherDrag = (event) => {
    if (
      !launcherDragState ||
      event.pointerId !== launcherDragState.pointerId
    ) {
      return;
    }

    const deltaX = event.clientX - launcherDragState.startX;
    const deltaY = event.clientY - launcherDragState.startY;
    const distance = Math.hypot(deltaX, deltaY);

    if (!launcherDragState.dragged) {
      if (distance <= READ_ALOUD_DRAG_THRESHOLD) {
        return;
      }

      launcherDragState.dragged = true;
      button.classList.add("is-dragging");
    }

    setLauncherPosition(
      launcherDragState.startLeft + deltaX,
      launcherDragState.startTop + deltaY,
    );
    event.preventDefault();
  };

  const handleLauncherActivation = () => {
    if (!isSpeechSupported()) {
      window.alert("当前浏览器暂不支持语音朗读");
      return;
    }

    if (!state.panelOpen) {
      if (!ensureReadableContent()) {
        return;
      }

      setPanelOpen(true);
      keepPanelInViewport();

      if (state.status === "ended") {
        playFrom(0);
      } else {
        resumePlayback();
      }
      return;
    }

    togglePlayback();
  };

  const finishLauncherDrag = (event) => {
    if (
      !launcherDragState ||
      event.pointerId !== launcherDragState.pointerId
    ) {
      return;
    }

    const activeDrag = launcherDragState;
    launcherDragState = null;

    try {
      button.releasePointerCapture(event.pointerId);
    } catch {
      // The browser may have released capture before this handler runs.
    }

    button.classList.remove("is-dragging");

    if (!activeDrag.dragged && event.type === "pointerup") {
      handleLauncherActivation();
      suppressLauncherClick = true;
      window.setTimeout(() => {
        suppressLauncherClick = false;
      }, 800);
      return;
    }

    if (!activeDrag.dragged) {
      return;
    }

    const rect = button.getBoundingClientRect();
    setLauncherPosition(rect.left, rect.top, { persist: true });
    suppressLauncherClick = true;
    window.setTimeout(() => {
      suppressLauncherClick = false;
    }, 800);
  };

  const clampIndex = (index) =>
    Math.max(
      0,
      Math.min(Number(index) || 0, Math.max(state.paragraphs.length - 1, 0)),
    );

  const updateUi = () => {
    const total = state.paragraphs.length;
    state.index = clampIndex(state.index);
    const displayIndex = total ? state.index + 1 : 0;
    const progress =
      total <= 1 ? (total ? 100 : 0) : (state.index / (total - 1)) * 100;

    panel.dataset.state = state.status;
    panel.classList.toggle("is-open", state.panelOpen);
    panel.classList.toggle("is-playing", state.status === "playing");
    panel.setAttribute("aria-hidden", String(!state.panelOpen));
    progressInput.max = String(Math.max(total - 1, 0));
    progressInput.value = String(total ? state.index : 0);
    progressInput.disabled = !total;
    progressInput.style.setProperty("--reader-progress", `${progress}%`);
    progressInput.setAttribute(
      "aria-valuetext",
      total ? `第 ${displayIndex} 段，共 ${total} 段` : "暂无内容",
    );
    countElement.textContent = total ? `${displayIndex} / ${total}` : "0 / 0";

    const isPlaying = state.status === "playing";
    const labels = {
      idle: total ? `准备朗读 · 共 ${total} 段` : "暂无可朗读内容",
      playing: `正在朗读 · 第 ${displayIndex} 段`,
      paused: `已暂停 · 第 ${displayIndex} 段`,
      ended: "本页已读完",
    };
    statusElement.textContent = labels[state.status] || labels.idle;
    playButton.classList.toggle("is-playing", isPlaying);
    playButton.setAttribute(
      "aria-label",
      isPlaying
        ? "暂停朗读"
        : state.status === "paused"
          ? "继续朗读"
          : state.status === "ended"
            ? "从头朗读"
            : "开始朗读",
    );

    rateButtons.forEach((rateButton) => {
      const isSelected =
        Number(rateButton.dataset.readerRate) === Number(state.rate);
      rateButton.setAttribute("aria-pressed", String(isSelected));
      rateButton.classList.toggle("is-active", isSelected);
    });

    button.classList.toggle("is-reading", isPlaying);
    button.classList.toggle("is-panel-open", state.panelOpen);
    button.setAttribute("aria-pressed", String(isPlaying));
    button.setAttribute("aria-expanded", String(state.panelOpen));
    const launcherLabel = isPlaying
      ? "暂停语音朗读"
      : state.panelOpen && state.status === "paused"
        ? "继续语音朗读"
        : state.panelOpen && state.status === "ended"
          ? "从头语音朗读"
          : state.panelOpen
            ? "开始语音朗读"
            : "打开语音朗读控制面板";
    button.setAttribute("aria-label", launcherLabel);
    button.title = launcherLabel;
  };

  const setPanelOpen = (open) => {
    state.panelOpen = open;
    updateUi();
  };

  const cancelSpeech = () => {
    state.session += 1;
    state.utterance = null;

    if (isSpeechSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // The local pointer remains valid if cancellation is unavailable.
      }
    }
  };

  const clearPendingSeek = () => {
    window.clearTimeout(seekTimer);
    seekTimer = null;
    resumeAfterSeek = false;
  };

  const clampToViewport = (value, maximum) =>
    Math.max(8, Math.min(value, Math.max(8, maximum)));

  const keepPanelInViewport = () => {
    if (!state.panelOpen || !panel.style.left) {
      return;
    }

    const margin = 8;
    const maxLeft = window.innerWidth - panel.offsetWidth - margin;
    const maxTop = window.innerHeight - panel.offsetHeight - margin;
    panel.style.left = `${clampToViewport(parseFloat(panel.style.left), maxLeft)}px`;
    panel.style.top = `${clampToViewport(parseFloat(panel.style.top), maxTop)}px`;
  };

  const startPanelDrag = (event) => {
    if (
      !state.panelOpen ||
      event.button > 0 ||
      (event.target instanceof Element &&
        event.target.closest("button, input, a"))
    ) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: rect.left,
      startTop: rect.top,
    };
    panel.classList.add("is-dragging");
    panel.style.left = `${rect.left}px`;
    panel.style.right = "auto";
    panel.style.top = `${rect.top}px`;
    panel.style.bottom = "auto";
    panel.style.transform = "none";

    try {
      dragHandle.setPointerCapture(event.pointerId);
    } catch {
      // Window-level pointer tracking still keeps the panel within bounds.
    }

    event.preventDefault();
  };

  const movePanel = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) {
      return;
    }

    const margin = 8;
    const maxLeft = window.innerWidth - panel.offsetWidth - margin;
    const maxTop = window.innerHeight - panel.offsetHeight - margin;
    const nextLeft = dragState.startLeft + event.clientX - dragState.startX;
    const nextTop = dragState.startTop + event.clientY - dragState.startY;
    panel.style.left = `${clampToViewport(nextLeft, maxLeft)}px`;
    panel.style.top = `${clampToViewport(nextTop, maxTop)}px`;
    event.preventDefault();
  };

  const endPanelDrag = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) {
      return;
    }

    try {
      dragHandle.releasePointerCapture(event.pointerId);
    } catch {
      // The browser may have already released capture.
    }

    dragState = null;
    panel.classList.remove("is-dragging");
  };

  const normalizeReadableText = (text) =>
    String(text || "")
      .replace(/\b(?:https?:\/\/|www\.)\S+/gi, " ")
      .replace(
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi,
        " ",
      )
      .replace(/[A-Za-z]+/g, " ")
      .replace(/传薪/g, "船薪")
      .replace(
        /[^\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff0-9０-９，。！？、；：:“”‘’《》〈〉（）【】〔〕…—·]/g,
        "",
      )
      .replace(/\s+/g, "")
      .trim();

  const getReadableParagraphs = () => {
    const contentRoot =
      document.querySelector("#main-content") ||
      document.querySelector("main") ||
      document.querySelector("article");

    if (!contentRoot) {
      return [];
    }

    const excludedSelector =
      '.sr-only, [hidden], [aria-hidden="true"], .search-results, .message-drawer, .quiz-modal, script, style';

    return Array.from(contentRoot.querySelectorAll("h1, h2, h3, h4, h5, h6, p"))
      .filter((element) => {
        if (element.closest(excludedSelector)) {
          return false;
        }

        const style = window.getComputedStyle(element);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          element.getClientRects().length > 0
        );
      })
      .map((element) => {
        const text = normalizeReadableText(element.textContent);
        const isHeading = /^H[1-6]$/.test(element.tagName);

        if (isHeading && text && !/[。！？]$/.test(text)) {
          return `${text.replace(/[，、；：]+$/, "")}。`;
        }

        return text;
      })
      .filter(Boolean);
  };

  const ensureReadableContent = () => {
    if (!state.paragraphs.length) {
      state.paragraphs = getReadableParagraphs();
    }

    if (!state.paragraphs.length) {
      state.index = 0;
      state.status = "idle";
      updateUi();
      window.alert("当前页面暂无可朗读的正文内容");
      return false;
    }

    state.index = clampIndex(state.index);
    updateUi();
    return true;
  };

  const getPreferredChineseVoice = () => {
    const voices = window.speechSynthesis.getVoices?.() || [];
    return (
      voices.find((voice) => /^zh[-_]CN/i.test(voice.lang)) ||
      voices.find((voice) => /^zh/i.test(voice.lang)) ||
      null
    );
  };

  const finishPlayback = () => {
    state.status = "ended";
    state.utterance = null;
    updateUi();
  };

  const speakCurrentParagraph = () => {
    if (state.status !== "playing") {
      return;
    }

    if (!state.paragraphs.length || state.index >= state.paragraphs.length) {
      finishPlayback();
      return;
    }

    const session = ++state.session;
    const preferredVoice = getPreferredChineseVoice();
    const utterance = new window.SpeechSynthesisUtterance(
      state.paragraphs[state.index],
    );
    utterance.lang = "zh-CN";
    utterance.rate = state.rate;
    utterance.pitch = 1;

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      if (session !== state.session || state.status !== "playing") {
        return;
      }

      state.utterance = null;

      if (state.index < state.paragraphs.length - 1) {
        state.index += 1;
        updateUi();
        speakCurrentParagraph();
      } else {
        finishPlayback();
      }
    };
    utterance.onerror = (event) => {
      if (session !== state.session) {
        return;
      }

      if (event.error === "canceled" || event.error === "interrupted") {
        return;
      }

      state.status = "idle";
      state.utterance = null;
      updateUi();

      if (
        event.error === "language-unavailable" ||
        event.error === "voice-unavailable" ||
        event.error === "not-allowed"
      ) {
        window.alert("当前设备暂无可用的普通话语音");
      } else {
        window.alert("语音朗读未能启动，请稍后重试");
      }
    };

    state.utterance = utterance;
    updateUi();

    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      state.status = "idle";
      state.utterance = null;
      updateUi();
      window.alert("语音朗读未能启动，请稍后重试");
    }
  };

  const playFrom = (index) => {
    if (!ensureReadableContent()) {
      return;
    }

    clearPendingSeek();
    cancelSpeech();
    state.index = clampIndex(index);
    state.status = "playing";

    try {
      window.speechSynthesis.resume();
    } catch {
      // A fresh utterance can still be queued below.
    }

    speakCurrentParagraph();
  };

  const restartCurrentParagraph = () => {
    const index = clampIndex(state.index);
    clearPendingSeek();
    cancelSpeech();
    state.index = index;
    state.status = "playing";
    updateUi();
    const restartSession = state.session;

    // Some engines ignore a new utterance queued in the same task as cancel().
    window.setTimeout(() => {
      if (
        restartSession !== state.session ||
        state.status !== "playing" ||
        state.index !== index
      ) {
        return;
      }

      try {
        window.speechSynthesis.resume();
      } catch {
        // The fresh utterance below still uses the selected rate.
      }

      speakCurrentParagraph();
    }, 40);
  };

  const pausePlayback = () => {
    if (state.status !== "playing") {
      return;
    }

    state.status = "paused";
    updateUi();

    try {
      window.speechSynthesis.pause();
    } catch {
      // The current paragraph is restarted from the same index on resume.
    }
  };

  const resumePlayback = () => {
    if (state.status === "paused") {
      if (state.utterance && window.speechSynthesis.paused) {
        state.status = "playing";
        updateUi();

        try {
          window.speechSynthesis.resume();
        } catch {
          playFrom(state.index);
        }
      } else {
        playFrom(state.index);
      }
      return;
    }

    if (state.status === "ended") {
      playFrom(0);
      return;
    }

    playFrom(state.index);
  };

  const togglePlayback = () => {
    if (state.status === "playing") {
      pausePlayback();
    } else {
      resumePlayback();
    }
  };

  const closePanel = ({ restoreFocus = true } = {}) => {
    const reachedEnd = state.status === "ended";
    clearPendingSeek();
    cancelSpeech();
    state.status = reachedEnd ? "ended" : "idle";
    state.panelOpen = false;
    updateUi();

    if (restoreFocus) {
      button.focus({ preventScroll: true });
    }
  };

  const stopAndDismiss = () => {
    clearPendingSeek();
    cancelSpeech();
    state.status = "idle";
    state.panelOpen = false;
    state.index = 0;
    updateUi();
  };

  const setPlaybackRate = (rate) => {
    const nextRate = Number(rate);

    if (!RATE_OPTIONS.includes(nextRate) || nextRate === state.rate) {
      return;
    }

    const wasPlaying = state.status === "playing";
    state.rate = nextRate;
    updateUi();

    if (wasPlaying) {
      restartCurrentParagraph();
    } else if (state.status === "paused") {
      cancelSpeech();
      updateUi();
    }
  };

  restoreLauncherPosition();

  button.addEventListener(
    "click",
    (event) => {
      if (!suppressLauncherClick) {
        return;
      }

      suppressLauncherClick = false;
      event.preventDefault();
      event.stopImmediatePropagation();
    },
    true,
  );

  button.addEventListener("click", handleLauncherActivation);

  playButton.addEventListener("click", togglePlayback);
  closeButton.addEventListener("click", () => closePanel());
  button.addEventListener("pointerdown", startLauncherDrag);
  window.addEventListener("pointermove", moveLauncherDrag, { passive: false });
  window.addEventListener("pointerup", finishLauncherDrag);
  window.addEventListener("pointercancel", finishLauncherDrag);
  dragHandle.addEventListener("pointerdown", startPanelDrag);
  dragHandle.addEventListener("pointermove", movePanel);
  dragHandle.addEventListener("pointerup", endPanelDrag);
  dragHandle.addEventListener("pointercancel", endPanelDrag);
  dragHandle.addEventListener("lostpointercapture", () => {
    dragState = null;
    panel.classList.remove("is-dragging");
  });
  window.addEventListener("resize", keepPanelInViewport);
  window.addEventListener("resize", keepLauncherInViewport);
  window.visualViewport?.addEventListener("resize", keepLauncherInViewport);

  rateButtons.forEach((rateButton) => {
    rateButton.addEventListener("click", () => {
      setPlaybackRate(rateButton.dataset.readerRate);
    });
  });

  progressInput.addEventListener("input", () => {
    if (state.status === "playing") {
      resumeAfterSeek = true;
      cancelSpeech();
      state.status = "paused";
    }

    state.index = clampIndex(progressInput.value);
    updateUi();
    window.clearTimeout(seekTimer);

    if (resumeAfterSeek) {
      seekTimer = window.setTimeout(() => {
        const index = state.index;
        resumeAfterSeek = false;
        playFrom(index);
      }, 260);
    }
  });

  progressInput.addEventListener("change", () => {
    window.clearTimeout(seekTimer);
    const shouldResume = resumeAfterSeek;
    resumeAfterSeek = false;
    state.index = clampIndex(progressInput.value);

    if (shouldResume) {
      playFrom(state.index);
    } else if (state.status === "ended") {
      state.status = "idle";
      updateUi();
    } else {
      updateUi();
    }
  });

  document.addEventListener(
    "click",
    (event) => {
      if (
        !["playing", "paused"].includes(state.status) ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      try {
        const destination = new URL(link.href, window.location.href);
        const staysOnCurrentDocument =
          destination.origin === window.location.origin &&
          destination.pathname === window.location.pathname &&
          destination.search === window.location.search;

        if (!staysOnCurrentDocument) {
          stopAndDismiss();
        }
      } catch {
        stopAndDismiss();
      }
    },
    true,
  );

  window.addEventListener("pagehide", stopAndDismiss);
  window.addEventListener("beforeunload", stopAndDismiss);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      stopAndDismiss();
    }
  });

  updateUi();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeReadAloud, {
    once: true,
  });
} else {
  initializeReadAloud();
}

const initializeSiteScrollbar = () => {
  if (document.querySelector("[data-site-scrollbar]")) {
    return;
  }

  const scrollbar = document.createElement("div");
  scrollbar.className = "site-scrollbar";
  scrollbar.dataset.siteScrollbar = "";
  scrollbar.setAttribute("aria-hidden", "true");
  scrollbar.hidden = true;

  const track = document.createElement("span");
  track.className = "site-scrollbar__track";

  const thumb = document.createElement("button");
  thumb.className = "site-scrollbar__thumb";
  thumb.type = "button";
  thumb.tabIndex = -1;

  const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  star.setAttribute("viewBox", "0 0 24 24");
  star.setAttribute("aria-hidden", "true");

  const starShape = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  starShape.setAttribute(
    "d",
    "M12 1.8l3.05 6.18 6.82.99-4.94 4.81 1.17 6.79L12 17.37l-6.1 3.2 1.17-6.79-4.94-4.81 6.82-.99z",
  );

  star.append(starShape);
  thumb.append(star);
  scrollbar.append(track, thumb);
  document.body.append(scrollbar);

  let animationFrame = 0;
  let isDragging = false;

  const getScrollMetrics = () => {
    const documentElement = document.documentElement;
    const pageHeight = Math.max(
      documentElement.scrollHeight,
      document.body?.scrollHeight || 0,
    );
    const viewportHeight = window.innerHeight || documentElement.clientHeight;

    return {
      maxScroll: Math.max(pageHeight - viewportHeight, 0),
      scrollTop: window.scrollY || documentElement.scrollTop || 0,
    };
  };

  const updateScrollbar = () => {
    animationFrame = 0;

    const { maxScroll, scrollTop } = getScrollMetrics();
    scrollbar.hidden = maxScroll < 2;

    if (scrollbar.hidden) {
      thumb.style.top = "0px";
      return;
    }

    const travelDistance = Math.max(
      scrollbar.clientHeight - thumb.offsetHeight,
      0,
    );
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    thumb.style.top = `${(progress * travelDistance).toFixed(2)}px`;
  };

  const requestScrollbarUpdate = () => {
    if (animationFrame) {
      return;
    }

    animationFrame = window.requestAnimationFrame(updateScrollbar);
  };

  const scrollToPointer = (event) => {
    const { maxScroll } = getScrollMetrics();
    const travelDistance = Math.max(
      scrollbar.clientHeight - thumb.offsetHeight,
      0,
    );

    if (!maxScroll || !travelDistance) {
      return;
    }

    const bounds = scrollbar.getBoundingClientRect();
    const pointerPosition = Math.min(
      Math.max(event.clientY - bounds.top - thumb.offsetHeight / 2, 0),
      travelDistance,
    );

    window.scrollTo({
      top: (pointerPosition / travelDistance) * maxScroll,
      behavior: "instant",
    });
  };

  const startDragging = (event) => {
    if (event.button !== 0) {
      return;
    }

    isDragging = true;
    scrollbar.classList.add("is-dragging");
    thumb.setPointerCapture(event.pointerId);
    scrollToPointer(event);
    event.preventDefault();
  };

  const moveDragging = (event) => {
    if (!isDragging) {
      return;
    }

    scrollToPointer(event);
    event.preventDefault();
  };

  const stopDragging = (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    scrollbar.classList.remove("is-dragging");

    if (thumb.hasPointerCapture(event.pointerId)) {
      thumb.releasePointerCapture(event.pointerId);
    }
  };

  thumb.addEventListener("pointerdown", startDragging);
  thumb.addEventListener("pointermove", moveDragging);
  thumb.addEventListener("pointerup", stopDragging);
  thumb.addEventListener("pointercancel", stopDragging);
  thumb.addEventListener("lostpointercapture", () => {
    isDragging = false;
    scrollbar.classList.remove("is-dragging");
  });

  window.addEventListener("scroll", requestScrollbarUpdate, { passive: true });
  window.addEventListener("resize", requestScrollbarUpdate);
  window.addEventListener("load", requestScrollbarUpdate);

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(requestScrollbarUpdate);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);
  }

  requestScrollbarUpdate();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSiteScrollbar, {
    once: true,
  });
} else {
  initializeSiteScrollbar();
}

const initializeLearningProgress = () => {
  const progressModule = document.querySelector("[data-learning-progress]");

  if (!progressModule) {
    return;
  }

  const valueNode = progressModule.querySelector(
    "[data-learning-progress-value]",
  );
  const inlineValueNode = progressModule.querySelector(
    "[data-learning-progress-inline]",
  );
  const progressBar = progressModule.querySelector(
    "[data-learning-progress-bar]",
  );
  const progressFill = progressModule.querySelector(
    "[data-learning-progress-fill]",
  );
  const milestoneNodes = {
    quiz: progressModule.querySelector("[data-learning-progress-quiz]"),
    map: progressModule.querySelector("[data-learning-progress-map]"),
    poster: progressModule.querySelector("[data-learning-progress-poster]"),
    badge: progressModule.querySelector("[data-learning-progress-badge]"),
  };
  const milestoneTextNodes = {
    quiz: progressModule.querySelector("[data-learning-progress-quiz-text]"),
    map: progressModule.querySelector("[data-learning-progress-map-text]"),
    poster: progressModule.querySelector("[data-learning-progress-poster-text]"),
    badge: progressModule.querySelector("[data-learning-progress-badge-text]"),
  };

  const readStoredJson = (key) => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || "null");
    } catch {
      return null;
    }
  };

  const getQuizProgress = () => {
    const quizState = readStoredJson(LEARNING_PROGRESS_KEYS.quiz);
    const answerCount =
      quizState?.answers && typeof quizState.answers === "object"
        ? Object.keys(quizState.answers).length
        : 0;
    const completed =
      quizState?.completed === true && answerCount >= QUIZ_QUESTIONS.length;

    return {
      completed,
      answerCount: Math.min(answerCount, QUIZ_QUESTIONS.length),
    };
  };

  const getPosterProgress = () => {
    const posterRecord = readStoredJson(LEARNING_PROGRESS_KEYS.poster);

    return Boolean(
      posterRecord === true ||
        (posterRecord &&
          typeof posterRecord === "object" &&
          typeof posterRecord.generatedAt === "string"),
    );
  };

  const getBadgeProgress = () => {
    const badgeRecord = readStoredJson(LEARNING_PROGRESS_KEYS.badge);

    return Boolean(
      badgeRecord &&
        typeof badgeRecord.serial === "string" &&
        /^NO\. \d{8}$/.test(badgeRecord.serial) &&
        typeof badgeRecord.claimedAt === "string" &&
        Number.isFinite(new Date(badgeRecord.claimedAt).getTime()),
    );
  };

  const setMilestoneState = (key, isComplete, text) => {
    milestoneNodes[key]?.classList.toggle("is-complete", isComplete);

    if (milestoneTextNodes[key]) {
      milestoneTextNodes[key].textContent = text;
    }
  };

  const updateLearningProgress = () => {
    const quiz = getQuizProgress();
    const visitedNodes = loadVisitedMarchNodes();
    const posterGenerated = getPosterProgress();
    const badgeClaimed = getBadgeProgress();
    const countedMapVisits = Math.min(visitedNodes.size, 8);
    const percentage = Math.min(
      100,
      (quiz.completed ? 40 : 0) +
        countedMapVisits * 5 +
        (posterGenerated ? 10 : 0) +
        (badgeClaimed ? 20 : 0),
    );
    const percentageLabel = `${percentage}%`;

    if (valueNode) {
      valueNode.textContent = percentageLabel;
    }

    if (inlineValueNode) {
      inlineValueNode.textContent = percentageLabel;
    }

    if (progressFill) {
      progressFill.style.width = percentageLabel;
    }

    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(percentage));
      progressBar.setAttribute(
        "aria-valuetext",
        `你已解锁 ${percentage}% 的长征精神`,
      );
    }

    progressModule.classList.toggle("is-complete", percentage === 100);

    setMilestoneState(
      "quiz",
      quiz.completed,
      quiz.completed
        ? `已完成 ${QUIZ_QUESTIONS.length} 题`
        : quiz.answerCount
          ? `已答 ${quiz.answerCount} / ${QUIZ_QUESTIONS.length} 题`
          : "未完成",
    );
    setMilestoneState(
      "map",
      visitedNodes.size > 0,
      visitedNodes.size
        ? `已点亮 ${visitedNodes.size} 个地标`
        : "尚未点亮",
    );
    setMilestoneState(
      "poster",
      posterGenerated,
      posterGenerated ? "已生成海报" : "未生成",
    );
    setMilestoneState(
      "badge",
      badgeClaimed,
      badgeClaimed ? "已领取徽章" : "未领取",
    );
  };

  const handleProgressStorageChange = (event) => {
    if (
      !event.key ||
      Object.values(LEARNING_PROGRESS_KEYS).includes(event.key)
    ) {
      updateLearningProgress();
    }
  };

  window.addEventListener(
    LEARNING_PROGRESS_EVENT,
    updateLearningProgress,
  );
  window.addEventListener("storage", handleProgressStorageChange);
  window.addEventListener("focus", updateLearningProgress);
  window.addEventListener("pageshow", updateLearningProgress);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      updateLearningProgress();
    }
  });

  updateLearningProgress();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLearningProgress, {
    once: true,
  });
} else {
  initializeLearningProgress();
}

const initializeHistoryRoamer = () => {
  const roamer = document.querySelector("[data-history-roamer]");
  const timeline = document.querySelector(".timeline");

  if (!roamer || !timeline) {
    return;
  }

  const yearsNav = roamer.querySelector("[data-history-years]");
  const card = roamer.querySelector("[data-history-card]");
  const periodNode = roamer.querySelector("[data-history-period]");
  const stationNode = roamer.querySelector("[data-history-station]");
  const yearNode = roamer.querySelector("[data-history-year]");
  const titleNode = roamer.querySelector("[data-history-title]");
  const introNode = roamer.querySelector("[data-history-intro]");
  const previousButton = roamer.querySelector("[data-history-prev]");
  const nextButton = roamer.querySelector("[data-history-next]");
  const detailButton = roamer.querySelector("[data-history-detail]");
  const autoButton = roamer.querySelector("[data-history-auto]");
  const autoLabel = roamer.querySelector("[data-history-auto-label]");
  const playIcon = roamer.querySelector("[data-history-play-icon]");
  const pauseIcon = roamer.querySelector("[data-history-pause-icon]");
  const progressBar = roamer.querySelector("[data-history-progress]");
  const progressFill = roamer.querySelector("[data-history-progress-fill]");

  if (
    !yearsNav ||
    !card ||
    !periodNode ||
    !stationNode ||
    !yearNode ||
    !titleNode ||
    !introNode ||
    !previousButton ||
    !nextButton ||
    !detailButton ||
    !autoButton ||
    !autoLabel ||
    !playIcon ||
    !pauseIcon ||
    !progressBar ||
    !progressFill
  ) {
    return;
  }

  const stations = [...timeline.querySelectorAll(".timeline__item[id]")]
    .map((element) => {
      const year = element.querySelector("time")?.textContent.trim();
      const title = element.querySelector("h3")?.textContent.trim();
      const intro = element.querySelector("p")?.textContent.trim();

      if (!year || !title || !intro) {
        return null;
      }

      return {
        element,
        id: element.id,
        year,
        title,
        intro,
      };
    })
    .filter(Boolean);

  if (!stations.length) {
    return;
  }

  const AUTO_ROAM_INTERVAL_MS = 4000;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const yearButtons = [];
  const state = {
    index: 0,
    isAutoPlaying: false,
  };
  let autoTimerId = null;
  let refreshTimerId = null;
  let scrollSyncFrameId = null;

  const getPeriodLabel = (year) => {
    const numericYear = Number(year);

    if (numericYear <= 1927) {
      return "开天辟地 · 国民革命";
    }

    if (numericYear <= 1936) {
      return "革命转折 · 万里长征";
    }

    if (numericYear <= 1949) {
      return "开国奠基 · 人民当家";
    }

    if (numericYear <= 1978) {
      return "改革开放 · 伟大转折";
    }

    return "新时代 · 新征程";
  };

  const clearAutoTimer = () => {
    window.clearTimeout(autoTimerId);
    autoTimerId = null;
  };

  const updateAutoButton = () => {
    const isPlaying = state.isAutoPlaying;

    playIcon.hidden = isPlaying;
    pauseIcon.hidden = !isPlaying;
    autoButton.setAttribute("aria-pressed", String(isPlaying));
    autoButton.classList.toggle("is-playing", isPlaying);
    autoLabel.textContent = isPlaying
      ? "暂停漫游"
      : state.index === stations.length - 1
        ? "重新漫游"
        : "自动漫游";
  };

  const centerActiveYear = () => {
    const activeButton = yearButtons[state.index];

    if (!activeButton) {
      return;
    }

    const targetLeft =
      activeButton.offsetLeft -
      yearsNav.clientWidth / 2 +
      activeButton.offsetWidth / 2;

    yearsNav.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  const setActiveStation = (
    nextIndex,
    { animate = true, centerYear = true } = {},
  ) => {
    const index = Math.max(0, Math.min(stations.length - 1, nextIndex));
    const station = stations[index];

    state.index = index;
    yearNode.textContent = station.year;
    titleNode.textContent = station.title;
    introNode.textContent = station.intro;
    periodNode.textContent = getPeriodLabel(station.year);
    stationNode.textContent = `第 ${index + 1} 站 / 共 ${stations.length} 站`;

    yearButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    previousButton.disabled = index === 0;
    nextButton.disabled = index === stations.length - 1;
    progressFill.style.width = `${((index + 1) / stations.length) * 100}%`;
    progressBar.setAttribute("aria-valuemax", String(stations.length));
    progressBar.setAttribute("aria-valuenow", String(index + 1));
    card.setAttribute("aria-labelledby", yearButtons[index]?.id || "history-roamer-title");

    if (animate) {
      card.classList.remove("is-refreshing");
      void card.offsetWidth;
      card.classList.add("is-refreshing");
      window.clearTimeout(refreshTimerId);
      refreshTimerId = window.setTimeout(() => {
        card.classList.remove("is-refreshing");
      }, 380);
    }

    if (centerYear) {
      centerActiveYear();
    }

    updateAutoButton();
  };

  const stopAutoRoam = () => {
    state.isAutoPlaying = false;
    clearAutoTimer();
    updateAutoButton();
  };

  const scheduleAutoAdvance = () => {
    clearAutoTimer();

    if (!state.isAutoPlaying) {
      return;
    }

    autoTimerId = window.setTimeout(() => {
      if (!state.isAutoPlaying) {
        return;
      }

      const nextIndex = state.index + 1;
      setActiveStation(nextIndex);

      if (nextIndex >= stations.length - 1) {
        stopAutoRoam();
        return;
      }

      scheduleAutoAdvance();
    }, AUTO_ROAM_INTERVAL_MS);
  };

  const startAutoRoam = () => {
    if (state.index === stations.length - 1) {
      setActiveStation(0);
    }

    state.isAutoPlaying = true;
    updateAutoButton();
    scheduleAutoAdvance();
  };

  stations.forEach((station, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "history-roamer__year";
    button.id = `history-roamer-tab-${station.id}`;
    button.textContent = station.year;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "history-roamer-card");
    button.setAttribute("aria-selected", String(index === 0));
    button.tabIndex = index === 0 ? 0 : -1;
    button.addEventListener("click", () => {
      stopAutoRoam();
      setActiveStation(index);
    });
    yearButtons.push(button);
    yearsNav.append(button);
  });

  yearsNav.setAttribute("role", "tablist");
  card.setAttribute("role", "tabpanel");

  yearsNav.addEventListener("keydown", (event) => {
    const keyOffsets = {
      ArrowLeft: -1,
      ArrowRight: 1,
    };

    let nextIndex = state.index;

    if (event.key in keyOffsets) {
      nextIndex = Math.max(
        0,
        Math.min(stations.length - 1, state.index + keyOffsets[event.key]),
      );
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = stations.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    stopAutoRoam();
    setActiveStation(nextIndex);
    yearButtons[nextIndex]?.focus();
  });

  previousButton.addEventListener("click", () => {
    setActiveStation(state.index - 1);

    if (state.index === stations.length - 1) {
      stopAutoRoam();
    } else if (state.isAutoPlaying) {
      scheduleAutoAdvance();
    }
  });

  nextButton.addEventListener("click", () => {
    setActiveStation(state.index + 1);

    if (state.index === stations.length - 1) {
      stopAutoRoam();
    } else if (state.isAutoPlaying) {
      scheduleAutoAdvance();
    }
  });

  detailButton.addEventListener("click", () => {
    stopAutoRoam();
    stations[state.index]?.element.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
  });

  autoButton.addEventListener("click", () => {
    if (state.isAutoPlaying) {
      stopAutoRoam();
    } else {
      startAutoRoam();
    }
  });

  const syncCardFromTimeline = () => {
    scrollSyncFrameId = null;
    const timelineRect = timeline.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.3;

    if (
      timelineRect.bottom < window.innerHeight * 0.18 ||
      timelineRect.top > window.innerHeight * 0.82
    ) {
      return;
    }

    let closestIndex = -1;
    let closestDistance = Number.POSITIVE_INFINITY;
    let containingIndex = -1;

    stations.forEach((station, index) => {
      const rect = station.element.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        return;
      }

      if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
        containingIndex = index;
        return;
      }

      const distance = Math.abs(rect.top - viewportAnchor);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (containingIndex >= 0) {
      closestIndex = containingIndex;
    }

    if (closestIndex >= 0 && closestIndex !== state.index) {
      stopAutoRoam();
      setActiveStation(closestIndex, {
        animate: false,
        centerYear: true,
      });
    }
  };

  const requestTimelineSync = () => {
    if (scrollSyncFrameId !== null) {
      return;
    }

    scrollSyncFrameId = window.requestAnimationFrame(syncCardFromTimeline);
  };

  window.addEventListener("scroll", requestTimelineSync, { passive: true });
  window.addEventListener("resize", requestTimelineSync);
  window.addEventListener("hashchange", () => {
    const hashId = decodeURIComponent(window.location.hash.slice(1));
    const hashIndex = stations.findIndex((station) => station.id === hashId);

    if (hashIndex >= 0) {
      stopAutoRoam();
      setActiveStation(hashIndex, { centerYear: true });
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoRoam();
    }
  });
  window.addEventListener("pagehide", stopAutoRoam);

  const initialHashId = decodeURIComponent(window.location.hash.slice(1));
  const initialHashIndex = stations.findIndex(
    (station) => station.id === initialHashId,
  );

  setActiveStation(initialHashIndex >= 0 ? initialHashIndex : 0, {
    animate: false,
  });
  requestTimelineSync();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeHistoryRoamer, {
    once: true,
  });
} else {
  initializeHistoryRoamer();
}
