import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'campus-agent', title: { zh: '校园个人智能体', en: 'Campus Personal Agent' },
    summary: { zh: '连接课表、地点与校内服务的隐私友好型智能助理。', en: 'A privacy-minded agent connecting schedules, places, and campus services.' },
    description: { zh: '将分散的校园信息组织成可追溯、可行动的回答。', en: 'Turns fragmented campus information into traceable, actionable answers.' },
    year: 2026, type: 'AI Engineering', role: { zh: '产品设计与全栈开发', en: 'Product design & full-stack development' }, tags: ['RAG', 'Tool Calling', 'TypeScript'], featured: true, cover: '/images/projects/agent.svg', links: { github: 'https://github.com/', demo: 'https://example.com' },
    sections: [
      { title: { zh: '背景与问题', en: 'Context & problem' }, body: { zh: '课程通知、场馆开放时间和办事流程分散在不同系统中，查找成本高且信息容易过期。', en: 'Course notices, venue hours, and procedures live in separate systems and quickly become stale.' } },
      { title: { zh: '解决方案', en: 'Solution' }, body: { zh: '设计带引用的检索流程与受限工具调用，让用户看见答案来源，并在执行前确认关键操作。', en: 'Designed retrieval with citations and constrained tool calls, showing sources and confirming consequential actions.' } },
      { title: { zh: '个人贡献', en: 'My contribution' }, body: { zh: '完成用户访谈、信息架构、RAG 评测集和前端原型；通过失败案例分析将回答可追溯率提升至 94%。', en: 'Led interviews, information architecture, the RAG evaluation set, and UI prototype; improved traceable answers to 94% through failure analysis.' } },
      { title: { zh: '反思与改进', en: 'Reflection' }, body: { zh: '下一步将加入细粒度权限、离线缓存和更多无障碍测试。', en: 'Next steps include granular permissions, offline caching, and broader accessibility testing.' } }
    ]
  },
  {
    slug: 'medical-imaging', title: { zh: '医学影像分类研究', en: 'Medical Imaging Classification' }, summary: { zh: '面向小样本 MRI 数据的可解释分类流程。', en: 'An interpretable classification pipeline for small MRI datasets.' }, description: { zh: '研究数据受限条件下稳定、可解释的影像分类方法。', en: 'Explores stable and interpretable imaging classification with limited data.' }, year: 2025, type: 'Research', role: { zh: '学生研究员', en: 'Student researcher' }, tags: ['PyTorch', 'Computer Vision', 'Grad-CAM'], featured: true, cover: '/images/projects/medical.svg', links: { paper: 'https://example.com' }, sections: [
      { title: { zh: '研究问题', en: 'Research question' }, body: { zh: '在样本量有限、类别不均衡时，如何得到稳定且能被临床人员理解的模型结果？', en: 'How can models remain stable and clinically legible with small, imbalanced datasets?' } },
      { title: { zh: '方法与结果', en: 'Method & results' }, body: { zh: '比较迁移学习、分层采样与校准策略，并用可视化核查模型关注区域；宏平均 F1 提升 8.4%。', en: 'Compared transfer learning, stratified sampling, and calibration, then audited attention regions; macro F1 improved by 8.4%.' } },
      { title: { zh: '个人贡献', en: 'My contribution' }, body: { zh: '负责数据清洗、基线复现、消融实验、误差分析和研究报告撰写。', en: 'Owned data cleaning, baseline reproduction, ablations, error analysis, and research writing.' } }
    ]
  },
  {
    slug: 'data-analysis-agent', title: { zh: '数据分析智能体', en: 'Data Analysis Agent' }, summary: { zh: '让非技术用户通过自然语言完成可复现的数据探索。', en: 'Reproducible data exploration through natural language for non-technical users.' }, description: { zh: '带沙箱执行、过程解释与结果校验的数据分析助手。', en: 'A data assistant with sandboxed execution, explanations, and result validation.' }, year: 2025, type: 'Open Source', role: { zh: '核心开发者', en: 'Core developer' }, tags: ['Python', 'Agents', 'Pandas'], featured: true, cover: '/images/projects/data.svg', links: { github: 'https://github.com/' }, sections: [
      { title: { zh: '需求分析', en: 'User needs' }, body: { zh: '用户需要的不只是图表，而是可检查的分析步骤、假设和数据质量提示。', en: 'Users need more than charts: inspectable steps, assumptions, and data-quality warnings.' } },
      { title: { zh: '系统架构', en: 'Architecture' }, body: { zh: '采用计划—执行—校验循环，所有生成代码在受限环境运行并保留可复现记录。', en: 'Uses a plan–execute–verify loop, running generated code in a constrained environment with reproducible logs.' } },
      { title: { zh: '成果', en: 'Outcome' }, body: { zh: '在 40 个真实分析任务上完成端到端测试，并将常见失败模式整理为公开评测集。', en: 'Completed end-to-end tests on 40 realistic tasks and published common failure cases as an evaluation set.' } }
    ]
  },
  {
    slug: 'ai-product-landscape', title: { zh: 'AI 产品竞品研究', en: 'AI Product Landscape' }, summary: { zh: '从用户任务、信任与商业模式分析 20 款 AI 助手。', en: 'A study of 20 AI assistants across jobs, trust, and business models.' }, description: { zh: '把功能清单转化为可执行的产品机会判断。', en: 'Turns feature inventories into actionable product opportunities.' }, year: 2024, type: 'Product', role: { zh: '产品研究员', en: 'Product researcher' }, tags: ['User Research', 'Strategy', 'Figma'], featured: false, cover: '/images/projects/product.svg', links: { demo: 'https://example.com' }, sections: [
      { title: { zh: '分析框架', en: 'Framework' }, body: { zh: '围绕目标用户、核心任务、信任机制、留存路径与付费动机建立对比框架。', en: 'Built a comparison around target users, core jobs, trust, retention, and willingness to pay.' } },
      { title: { zh: '结论', en: 'Findings' }, body: { zh: '识别出“可验证的专业工作流”机会，并制作交互原型验证信息溯源设计。', en: 'Identified an opportunity in verifiable professional workflows and prototyped source-tracing interactions.' } }
    ]
  }
];
