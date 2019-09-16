/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/09/【NLP比赛】中国中文信息学会文本溯源技术评测（SMP-ETST）Ranking-First/index.html","3fe7e48ce9e21f32a3098e3dfd428fdf"],["/2018/07/14/Hexo_Next_博客搭建记/index.html","aa2633285c27f0cfdcde94a4fed072f4"],["/2018/07/20/Use-linux-well/index.html","688a08f98e055bffa33c4ea11118504b"],["/2018/07/22/wikipedia-train-traditional-chinese-embedding（word2vec）model/index.html","24cb4f368eb1fac0a84bab1d744f9431"],["/2018/07/26/linux-uploading-baiduyunpan/index.html","1ec9c7fe5b0327f16b1bb4d734037499"],["/2018/07/29/Github-and-Coding-bulid-blog/index.html","3fdae25ba865a18d6db4ea73eadf4b31"],["/2018/08/07/Investigate-domestic-data-labeling-companies/index.html","961ff46e7ba5a5b1f4d52cca8f0b3cf5"],["/2018/08/17/Summary-of-time-complexity-and-space-complexity/index.html","ba6382b284cf4499a5e3604d137d737b"],["/2018/09/07/Dual-NIC-configuration/index.html","e632b77b900db8fcad57e96623d641a1"],["/2018/09/09/win10-software/index.html","2c233f96a3c95fcec410142087e9147e"],["/2018/09/17/Configuring-the-best-development-environment-with-pycharm-and-jupyter-notebook/index.html","9fdcc553d115e07fb7fa4dc21a049acd"],["/2018/09/29/How-to-write-a-great-paper/index.html","98cb2dff131287d7df62daf0f09422d4"],["/2018/10/27/From-transformer-architecture-to-transfer-learning/index.html","b33ee2687f8b65bbca362a6e8f7cff30"],["/2018/11/16/an-unknown-person-is-not-unknown/index.html","7046a680f543e7dcec8159b318f6b6e9"],["/2019/01/19/python3-tips/index.html","15e9e6cfea827d10956cab017eeea367"],["/2019/05/11/Recommended-system/index.html","62681a9d2912e2e4a7c6f8d1fbc4fe24"],["/404.html","3613f1ffb7d7b8657f04f434496ca70d"],["/about/index.html","a7671c32e74bcd213a5ce2eec67a21d2"],["/archives/2018/07/index.html","3aa4285efdb95f7492a50290fe4b8965"],["/archives/2018/08/index.html","8d8ad245c06a866697a91af568f2ae5d"],["/archives/2018/09/index.html","88ba1613e8dd5c7f1c5ec2f3c6fdabf9"],["/archives/2018/10/index.html","bbbc80580922c9df44f0cae1035d6810"],["/archives/2018/11/index.html","632c3f042bf2188350b232d664a27d44"],["/archives/2018/index.html","ab5a299cda9c92a4128177670d1ccabb"],["/archives/2018/page/2/index.html","4ec60a88a4679157da363027c0c5ec39"],["/archives/2019/01/index.html","7cf7288dc5264893df44b4ee1b70a30f"],["/archives/2019/05/index.html","b7516d6402d9469df6394c67a27d47f5"],["/archives/2019/index.html","357cb5a3bac682f6f5155990680d7cee"],["/archives/index.html","cbfd4a587e65e882196436c5d8a888ac"],["/archives/page/2/index.html","1165bf35bda1b6335b2cb5ac7d2455ea"],["/baidu_verify_tvNc42Gx3A.html","2adb6a363213ec96a2f5aff57b4f3334"],["/categories/Academic/Writing/index.html","28cf90fdc3f2b82df126dcc541df119c"],["/categories/Academic/index.html","f10367c4e94fec91846265ab49674a11"],["/categories/Algorithm/index.html","56192dc7127ff3939ed9c6f4366ec647"],["/categories/Deep-learning/Pre-training/index.html","04b94a8acee8b271cf9bcfc7c1a0811d"],["/categories/Deep-learning/index.html","8a72613a09b86d91a983c03611093f8f"],["/categories/Linux/index.html","288b1114a5ce7694e9a8104d23734a5b"],["/categories/Machine-learning/Data-labeling/index.html","754fdf7406a08757962049c6032318f9"],["/categories/Machine-learning/index.html","e549498b692750f8136f8b459270a9bf"],["/categories/Movie/Absurd-comedy/index.html","4370363faee62851d38411096f79a079"],["/categories/Movie/index.html","60f2014915920381ded9e98e3d48a051"],["/categories/NLP/Competition/index.html","b4a75d1784a4425616a5b2f5692757c4"],["/categories/NLP/Word2vex/index.html","fde0bf81d6f44a082d13788fef27c65a"],["/categories/NLP/index.html","592c3dae9dd11feae536da12f665e21c"],["/categories/Operating-system/Win10/index.html","2dc8b3930c1e40198a0867ee0627fd6a"],["/categories/Operating-system/index.html","e35a3daa94cd177a7b72748c40dffb07"],["/categories/Programming-language/Python3/index.html","f54b812f13858a961e41410e3829a376"],["/categories/Programming-language/index.html","7728acf0d43389dd459f77c1fd277941"],["/categories/Recommend-system/index.html","fe29f4cc72ee1317a58a548ea034951e"],["/categories/Tool/Computer-network/index.html","5e866f9da947608476150dc857ff5f72"],["/categories/Tool/Server/index.html","3dba3124e21f7fc4076f9391003b1d3b"],["/categories/Tool/index.html","b16899557f1cce96a2a1414bf9285083"],["/categories/blog/index.html","721272b6d57f95369b538cbb2e9feea8"],["/categories/index.html","57e4f65f3b02f882095067ae2bc89d7d"],["/css/main.css","82e707a6da7d59859433d5fe0a548bfe"],["/google47671999b73952db.html","e0b678617f67df2be4b6efe35702056c"],["/images/Wachat_money.png","adf5c583fd24719d2154005a6290129f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay_money.png","30225ede0367033ba4a2ea350e618946"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/christmas_ID_round.png","e57687a5869af45517673a93c5cc01ea"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/imagess/A_job/2019校招薪资_1.png","d8550c21dead3342f7bc80a3923e9b0a"],["/imagess/A_job/2019校招薪资_2.png","3f8f6bc1cf5d1ec2bb02781323c84ae1"],["/imagess/A_job/2019校招薪资_3.png","12e86a4219e1a8180012b8c6dc2dc522"],["/imagess/A_job/AI算法面试如何准备.jpg","02a7e8620db55a1a30bfa6b4ee88bfe2"],["/imagess/A_job/AUC.png","3c5c3d6211c747146f1a62ee71b9c26f"],["/imagess/A_job/CBOW.jpg","e67434ea689e932ae34e9592c7c15025"],["/imagess/A_job/Domain Expert.jpg","03308dcdb6ea23757d26587251854f37"],["/imagess/A_job/L1正则化产生稀疏的权值矩阵.png","52317fad576f4ad403f156d0844e4003"],["/imagess/A_job/LSTM_1.png","2d9c10cb388d2b256ea6955ee8d5ad4a"],["/imagess/A_job/LSTM_2.png","e87a95bd6fdd856961f230badd1096aa"],["/imagess/A_job/LSTM_3.png","ba55f8b8c6409fc3e4c3d7c8b36d2b32"],["/imagess/A_job/LSTM_4.png","ada6286c953d830fbdd3c23e971e4312"],["/imagess/A_job/NLP架构图.png","79d7fa771f52dbbbe594eb8088aebff5"],["/imagess/A_job/PCA and LDA .png","ca00208b837eec58262a0f70e9135bcb"],["/imagess/A_job/PCA.gif","df8e4e51f76053eb60ca56e22bc0daf6"],["/imagess/A_job/Path finder.jpg","9643030457186173eb4e2e351ed2e6fa"],["/imagess/A_job/Rookie.jpg","4ae1216179d095b03c5ccecc3e0cdcaf"],["/imagess/A_job/SEM.jpg","9fb3d85dd13696e6f8e86bd5ac87f6a6"],["/imagess/A_job/SEM2.jpg","75a737e7ef445c63113e0fed4fbca109"],["/imagess/A_job/SEM3.jpg","a8c7756b9ca9cc7efc6b4e190e697cab"],["/imagess/A_job/SEM4.jpg","b51963821858d2b3ec5c99e248bb728b"],["/imagess/A_job/Skip_Gram.jpg","fd5daea1111593eddd262bdd368d963f"],["/imagess/A_job/hierarchical softmax.jpg","c3d32a68490f674b2e10c94c840c4107"],["/imagess/A_job/keep learning.jpg","f817e50af60bce1156f1c0a636e864ee"],["/imagess/A_job/semantic　similarity.png","75bd7b987d61056929adc99e6abed067"],["/imagess/A_job/京锐夏列营实习.png","2adc4ff342d956895a7ff35a76462a41"],["/imagess/A_job/切词流程.jpg","7894ed8fd47d2ce09787416d636b2c64"],["/imagess/A_job/复述样例.png","a7153c453d929312b729f7148ce88603"],["/imagess/A_job/归并算法.jpg","41f405be36e5890b76cffde0bb18aa92"],["/imagess/A_job/激活函数.png","94f5398169e7cf1c8871bb42e9b29151"],["/imagess/A_job/生成式模型和判别式模型的区别.png","d8fa4a7d2b68ebcfb7072ab9f749deeb"],["/imagess/A_job/相似性度量PRC曲线图.png","0499e701103ac95ff31123384842e36d"],["/imagess/A_job/群面笔记.png","812d76e0e0c49fed97d11c3c8cd67f10"],["/imagess/A_job/该做什么.png","b60f36990375e02625c259b757299273"],["/imagess/A_job/阿里巴巴组织架构.jpg","0b75de5d74c2cf9e9c44a1935b9f527b"],["/imagess/A_job/阿里星的面试记录.png","b3d5f26c8c609997e6b82c8663f0d586"],["/imagess/Computational_Advertising/个性化系统框架.png","26e2731d020c8e88e90804d348052dd1"],["/imagess/Computational_Advertising/主要广告的产品优化目标分解.png","f9eac2271344b56410332c52beb45d2e"],["/imagess/Computational_Advertising/在线广告概览.png","f82dacb065b1de5ee5be893ece150f00"],["/imagess/Computational_Advertising/在线广告结算方式.png","a5736b06788cc3b3350c521a13e38930"],["/imagess/Computational_Advertising/常见受众定向方法.png","989a341c8d3af6053a2a38e2b18c9048"],["/imagess/Computational_Advertising/广告效果产生示意图.png","c369df258802794dfe7a6874d6b99734"],["/imagess/Computational_Advertising/广告系统的一般性构架.png","a3f36e247fe35acc896ff41413120d4b"],["/imagess/Computational_Advertising/搜索广告与推荐.png","811ceeaf5a003b1584970a1c253d27bb"],["/imagess/Computational_Advertising/数据管理平台示意图.png","ead3a3b46a1c970b0542b859166367b6"],["/imagess/Daily_thoughts/2019.07.png","900630c36c4e84809676b38614603947"],["/imagess/Daily_thoughts/2019.08.png","8dab4404a4adaf4cbca359fb88645046"],["/imagess/Daily_thoughts/打卡时间.jpg","d980225a71c59a66e326a46bebf9d502"],["/imagess/Data_structure_and_algorithm/冒泡排序1.gif","d4c88b8cc620af6af67c33910899fcf7"],["/imagess/Data_structure_and_algorithm/冒泡排序2.gif","c33a1651e1f72af822f53a1a369d80a9"],["/imagess/Data_structure_and_algorithm/冒泡排序3.gif","88283198de95d47b786be4564af82c67"],["/imagess/Data_structure_and_algorithm/堆排序.gif","b7907d351809293c60658b0b87053c66"],["/imagess/Data_structure_and_algorithm/堆排序1.gif","1a205c3f1770baf0edafea4fdf746b42"],["/imagess/Data_structure_and_algorithm/堆排序2.gif","2d571b4de2faccf2df0c7890db0dc9b7"],["/imagess/Data_structure_and_algorithm/希尔排序.gif","f9616f6892819e579a2d4ab10256a732"],["/imagess/Data_structure_and_algorithm/希尔排序1.gif","93bf1921fe36a1d4ad07f228985cda41"],["/imagess/Data_structure_and_algorithm/归并排序.gif","a29c0dd0186d1f8cef3c5ebdedf3e5a3"],["/imagess/Data_structure_and_algorithm/归并排序1.gif","59e1fd201b5e56aadff1ba1039c58fc9"],["/imagess/Data_structure_and_algorithm/归并排序2.gif","2ae46125cf054d55c30b7a9839eb7695"],["/imagess/Data_structure_and_algorithm/归并排序3.gif","96562bf26403fefd21a339389c6c7ab5"],["/imagess/Data_structure_and_algorithm/快速排序.gif","d4e5d0a778dba725091d8317e6bac939"],["/imagess/Data_structure_and_algorithm/快速排序1.gif","761c170d50c3abb7e753736057b11136"],["/imagess/Data_structure_and_algorithm/插入排序1.gif","6e67d1c722106442b422ee53e98575b3"],["/imagess/Data_structure_and_algorithm/插入排序2.gif","9ce56fa906ecc71adb5110c7fc9797a0"],["/imagess/Data_structure_and_algorithm/插入排序3.gif","7acc4be3b76352f50c6304ba006a9774"],["/imagess/Data_structure_and_algorithm/插入排序4.gif","11d9e99da28e5b5dee2b88d935aaba02"],["/imagess/Data_structure_and_algorithm/数据结构.jpg","372e95a86fd5f710e319862d898ce5b1"],["/imagess/Data_structure_and_algorithm/选择排序1.gif","f20b8898585b3ca03843d93ce2c35a68"],["/imagess/Data_structure_and_algorithm/选择排序2.gif","2bdd6b162c403d376c56c02e8a5560af"],["/imagess/Data_structure_and_algorithm/选择排序3.gif","44103f36ef65d0c04fc06faadb581595"],["/imagess/Data_structure_and_algorithm/鸡尾酒排序.gif","c703276ad071329e7d867facdf20e4bb"],["/imagess/Gaokao/2019全国一卷.png","049c1db794240eae7ee451549b4f413e"],["/imagess/Gaokao/2019全国二卷.png","ad84264f6833b0b8f46225aaf3724579"],["/imagess/Gaokao/2019天津卷.png","71f490f2da43d08d2b73190a06ee3a05"],["/imagess/Git_learn/git rebase1.png","e68be23d5247a71a6e83620bdc470eeb"],["/imagess/Git_learn/git rebase2.png","ad33f746eeb9df076ae38025a52910e8"],["/imagess/Git_learn/git rebase3.png","ea9cb10240cf11745b793175fbd752a1"],["/imagess/Git_learn/git rebase4.png","011153fe5bf3dd47959108c121b25650"],["/imagess/Git_learn/git revert1.png","0b4e269a5818b6e0d8d042b0fd5925f7"],["/imagess/Git_learn/git revert2.png","ee69b48b4fd9c36ea5ab1eb3877979b1"],["/imagess/Information_integration/2017工业设计软件领域.png","6c8d51131b45debbb84ae7058608154d"],["/imagess/Information_integration/2018 Z世代.png","041df585b41dde2ad99cb22f9a04a801"],["/imagess/Information_integration/985高校生毕业去哪里.png","df647d19764bfb5401158d838eb578fa"],["/imagess/Information_integration/两次牛市市场变化.png","2f2150c5e95b6f38bf02d5b168aad883"],["/imagess/Information_integration/中日人口结构对比.png","9b6b6f2389ca8e754dcdeea55a422e3c"],["/imagess/Information_integration/二线城市抢人政策.png","e368fd86c1fbd00181f504b652f6e12e"],["/imagess/Information_integration/互联网2019展望.png","9c15169a8a49c44da4b11815ab7653fa"],["/imagess/Information_integration/京沪深三大城市发展.png","871030393baf0a3413aca2bdc8da2776"],["/imagess/Information_integration/恐怖的中资显示屏三巨头.png","7ab93a3ec4640151ae4f7734c542fbf6"],["/imagess/Information_integration/时机与命运.png","67bd85eb3809a5881761ee4f1147ceec"],["/imagess/Information_integration/有趣又有利的社交裂变增长.png","b33919ab2104f016ad61d9a00534b5a2"],["/imagess/Information_integration/未来社会变迁.png","929f822efa6a6e7357f3d39d843a67a8"],["/imagess/Information_integration/本省高校的毕业生会留下吗.png","0956d3179351e2ace9c57a6bc8e85be5"],["/imagess/Information_integration/杭州创业氛围.png","84bd31c6f7b7eb8f7d5f3f6c2d698e2f"],["/imagess/Information_integration/泛文化产业 & 粉丝经济.png","2374f89af6f44db8ab695992ec82ebc2"],["/imagess/Information_integration/牛市各时期指标特征总结.png","9d7756f897b099be1ffd520cbe8480d1"],["/imagess/Information_integration/电子芯片产业的发展.png","569c4f91a48de030b2295bc37c4ddd8d"],["/imagess/Information_integration/科创版与A股的异同.png","5afef919ddd3f9f6e8139250ec8c70a6"],["/imagess/Information_integration/越南投资状况.png","4505d48b4fe91c1df0e45d4cbe32ae68"],["/imagess/JD_Notes/商业提升事业部组织架构.png","8cf34d3cbde85aec4bd7ddf0d8b45717"],["/imagess/Python_tips/浅拷贝.png","883191264cc9e148a2302a14b28f38bb"],["/imagess/Python_tips/深度拷贝.png","5b0c84b1483fb6492113b391ad32a53e"],["/imagess/Python_tips/赋值引用.png","a9924cb85c2d81a2a9db5f9fceea99f9"],["/imagess/Recsys/zhe_面试技能雷达图.png","7171c3c10c9990561424761ce28d1d6b"],["/imagess/Recsys/zhe_面试技能雷达图1.png","a9b444ea469d3e87750dacec07844fec"],["/imagess/Recsys/zhe_面试技能雷达图2.png","050a2b86af3cd77fd06c246a291f2b0a"],["/imagess/Recsys/推荐系统架构.png","21678fc1ee0e1730fa2eaa40fe3fc636"],["/imagess/Recsys/推荐系统架构1.png","349de4288729ce88139189d1bc54f0b9"],["/imagess/Recsys/推荐系统架构2.png","ac620a3c43bce608ecc73e16794c2791"],["/imagess/Recsys/极客时间_Bloomfilter.png","64b922b8dd135093a095850ac02b29a7"],["/imagess/Recsys/极客时间_LR＆GBDT.png","1065fdec8849170dbd46fc949067bbc2"],["/imagess/Recsys/极客时间_MAB.png","3c94509b6791c4de70e2da7f4a6bc484"],["/imagess/Recsys/极客时间_bandit效果对比.png","673820dbccae7f739e7026e739544694"],["/imagess/Recsys/极客时间_feed_拉.png","56ffefc89269a03943fdb0aefd4c5c67"],["/imagess/Recsys/极客时间_feed_推.png","9a62cd272d825e6493fd172f01caaee8"],["/imagess/Recsys/极客时间_simhash.png","f82abbcf971f943ea41631ce1ba3c1c6"],["/imagess/Recsys/极客时间_wide&deep.png","7be6f402a9420a3fb8d4096cd311be3c"],["/imagess/Recsys/极客时间_wide&deep公式.png","626fa07a1db87e7efde8b4649cefdd67"],["/imagess/Recsys/极客时间_wide&deep模型演化.png","f71acd4786a606a183a39e3ef7754b40"],["/imagess/Recsys/极客时间_wide&deep模型落地.png","44ea31423dd66b2376784893ebf0dddc"],["/imagess/Recsys/极客时间_wide&deep模型训练.png","11251a1eebce7fce1d66c5acc37f9358"],["/imagess/Recsys/极客时间_β分布.png","8c36d56c6e4ba1e55aa4cea1dcb092d0"],["/imagess/Recsys/极客时间_信息流.png","e5cbf9d4a912e17b18e6f68d24ee6285"],["/imagess/Recsys/极客时间_关键模块.png","a9a64d9ec207539b76c9cf2e0c8e41ba"],["/imagess/Recsys/极客时间_其他算法应用.png","d42e5a7b16ff341fb310fa25cad990ee"],["/imagess/Recsys/极客时间_内容推荐.jpg","4691f5de66ed4778449e0498bca8a5ef"],["/imagess/Recsys/极客时间_内容推荐1.png","e12883fd7ed5385528fbe73919b86389"],["/imagess/Recsys/极客时间_协同过滤.png","8ae06c429172c99eacc9cfd26fe65890"],["/imagess/Recsys/极客时间_实时性.png","c15ed1778152931576259d9c70ec3ce4"],["/imagess/Recsys/极客时间_实验平台_重叠实验.png","98f2256764964435a828736bcd75aaf2"],["/imagess/Recsys/极客时间_常见构架.png","7dc22fa896a0638db27dd1f6ce6d40eb"],["/imagess/Recsys/极客时间_开源工具.png","d35fd006e8c5c6ddf0b089071169ead1"],["/imagess/Recsys/极客时间_开源工具_内容分析.png","ff8d2e9ef6b6906ccfc6fde57017e539"],["/imagess/Recsys/极客时间_开源工具_协同过滤.png","f41303aa3b559e7d6ad4c1acdaada12e"],["/imagess/Recsys/极客时间_开源工具_完整推荐系统.png","bb01f823583be75d140bfa9627d94e6d"],["/imagess/Recsys/极客时间_开源工具_模型融合.png","d8a745c0fa63e530c08ba84c94f1149b"],["/imagess/Recsys/极客时间_推荐框架.png","364bc30b09f984a806ea0e04bb36312d"],["/imagess/Recsys/极客时间_推荐系统攻击.png","b0967cf88b35da2d954b5521a8609d01"],["/imagess/Recsys/极客时间_推荐系统架构.png","a5a0a891c93c8651e99ddde0cd194ea1"],["/imagess/Recsys/极客时间_推荐系统架构_总结.png","278d9d82b89c347dc028d353754f94e0"],["/imagess/Recsys/极客时间_推荐系统架构_简化版.png","d724ddb49091f328d160c0c3d683f775"],["/imagess/Recsys/极客时间_推荐系统防护.png","ca4263c76d16998543325d072b8a7015"],["/imagess/Recsys/极客时间_搜索推荐广告.png","0ee316999b6113aaf188f7ffd23b58ac"],["/imagess/Recsys/极客时间_搜索推荐广告1.png","253391f0e5879c657107b8bd99f415cd"],["/imagess/Recsys/极客时间_数据收集.png","b8aabb186b5ef8dba9d6d70ba22be1f1"],["/imagess/Recsys/极客时间_数据矩阵.png","f56f23cc4f84e35aef9aef7610f53602"],["/imagess/Recsys/极客时间_概念篇.png","efbd150f3db31d519f3c2d112632ae46"],["/imagess/Recsys/极客时间_模型融合.png","7752a646c27641db11f507a2c00eb9d5"],["/imagess/Recsys/极客时间_模型融合１.png","0d3d1f01a3981a7fbed66bd1c4517661"],["/imagess/Recsys/极客时间_深度学习.png","1819a3f73d9081b14457006b29e522de"],["/imagess/Recsys/极客时间_矩阵分解.png","20d3d23217945c808ee4c971b75cd161"],["/imagess/Recsys/极客时间_离线系统.png","050010911133710f597a1ab1feb991ed"],["/imagess/玮.png","5147e502cf727ae8475f84dac84d1be7"],["/imagess/玮.svg","643456c390cacc2e5049660eeac8e78d"],["/imagess/玮_16.png","a89344157babb51c0b5b19dc4b2dd316"],["/imagess/玮_32.png","a71b7dce171519c39cdb7bfd698a9665"],["/index.html","75619a946257bed0a11d9c52ea8ae957"],["/js/crypto-js.js","a9d090555f71c39019be28a229179de2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","2dd2ee556391c3fe23a303e3902c4ad1"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/custom.js","a42eea7478955b886d8ec1f5c3bc6f5d"],["/js/src/custom_title.js","416a4fc617a5635326ed4a578ee3f3ea"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","fd5559b88c9328c9a419b0232e0ef1bd"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/particle.js","b1a64c0b4d871a43a2b873c8896bed46"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bd74f9883d205b1497edc9accde5dec5"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","8cdf7b98d7f81c52e37a5a16d3293c1d"],["/tags/A-Cool-Fish/index.html","b2680db308fb91e06d83d3e8339ca20a"],["/tags/Absurd/index.html","7e0fe3e2402c7d30dd58cf34a730752a"],["/tags/Attention/index.html","51aeb519d595d70602ac30ffa613fdbe"],["/tags/BERT/index.html","852423fdb944355706a61d97b142e866"],["/tags/BoW/index.html","14a52198422a45f19e5e119e812105d8"],["/tags/Bypy/index.html","239df87fa2868d6279b37e8f0de88b7c"],["/tags/Coding-pages/index.html","4c4fedcb602047d5da66c2face7cb65c"],["/tags/Collaborative-filtering/index.html","36adcaa88dfa721a3d51019d4044a4fa"],["/tags/Comedy/index.html","a7d3c9830a9ae5e681c902cc5114529f"],["/tags/Conference-papers/index.html","52f9cf21683e1d40ef3d29f2e63cd722"],["/tags/Copy/index.html","f729c51db741df713bc760f0a6c6cb47"],["/tags/Crowdsourcing/index.html","e60728be85db44312c829338bbb701f3"],["/tags/DNSpod/index.html","97257764ebd407045c5bf27b71ec610d"],["/tags/Data-labeling/index.html","5eacd5435b8bc267fb3c1e981f84dae2"],["/tags/Deep-learning/index.html","00285c679980d3a9b36be000acc46ac0"],["/tags/Deepcopy/index.html","967715ba3d894b440ba7ff1a7839f46c"],["/tags/Domain/index.html","fe8d5baf14a170e25aefc8d23c292532"],["/tags/ELMo/index.html","a4f55c41d174b192dc350fca268bbb37"],["/tags/Embedding/index.html","c4a6ea716eec2d1a6769aee39c32b5ae"],["/tags/File-operations/index.html","e5c8d909c28f9f2b2eba35f9f84e33a3"],["/tags/Flux/index.html","0958c6ac3665ed219ee9256eeb2a790b"],["/tags/GNMT/index.html","9891e7ab5ef31e9c5e2ec08d053e0531"],["/tags/Generator/index.html","df21e7563fa34a6f39298cbd22dd6f01"],["/tags/Gensim/index.html","96958f66aa8277b4118e6962e7360b44"],["/tags/Github-pages/index.html","02d3c009fda2d8c49ced6b20fa967e6f"],["/tags/Hexo/index.html","b4af1be9a8aa6a14d644769d47652e6a"],["/tags/Hop-number/index.html","e01ecc9d54a86b8d68a7e204f648754c"],["/tags/Information-retrieval/index.html","558ca5a715476d4f098eaa612d6a1432"],["/tags/Inverted-index/index.html","e1efb05092993520a5456d42868ee46c"],["/tags/ItemCF/index.html","c793047189a02da4e1d3f4e3ad08adf2"],["/tags/Iterator/index.html","9e24b564d791e0875391b3794c0315bd"],["/tags/Jupyter/index.html","f057e9d6cf18acb76c3a6f81e8def715"],["/tags/Linux/index.html","a8305ba328152e0c7fa32bbb2ea85cc8"],["/tags/Machine-learning/index.html","7390c006515b4a164cc357a19ee383be"],["/tags/Movie/index.html","bece286bd96c59493b94dccc83865ec9"],["/tags/Multi-head-attention/index.html","b4fea3d72b6bc8f06efd92deec730d79"],["/tags/Multithreading/index.html","d8a8458ae9174858071fa908a99b5342"],["/tags/N-gram/index.html","c3cbc9af5af3f4bc1b6530f0c101c270"],["/tags/Next/index.html","8f9382b882265b5faab31f4d24f87266"],["/tags/Opencc/index.html","ff8dd0746db764cff065bdc695464adc"],["/tags/Paraphrase/index.html","e6fb6d7dcae7cf59b2a471b54f26433c"],["/tags/Positional-encoding/index.html","75a5fbfa0623fd75d97b680b32160de1"],["/tags/Pre-training/index.html","18b05bf456b6fbf0a78f29080829c1cc"],["/tags/PyCharm/index.html","dce5e86f32bcb763564ddaa783d6901d"],["/tags/Python3/index.html","0b4b32b5e1e9ca31a7b896f7a5dd3ae3"],["/tags/Routing-table/index.html","a0e9535c9f657f7a1502ab3580ad2428"],["/tags/SSL/index.html","ef2664c861a8bf6e8190b0c198c4c8cb"],["/tags/Segment/index.html","8ecc7414aad2fa8fb2036a14649f5aa1"],["/tags/Self-attention/index.html","e6693f5b5c7362acad7847b83295bd1f"],["/tags/Semi-supervised-learning/index.html","2f182af795f72bcac9322808ac38e8c3"],["/tags/Shadowsocks/index.html","65536a0a1f5156fcd1871bc1b081f2a9"],["/tags/Shell/index.html","a4eafa943deb24e4fca6251e8eb3c2a7"],["/tags/Social-recommendation/index.html","1d525408dd5895fb0ee5b30672fe8e48"],["/tags/Space-complexity/index.html","a04ad6363c037bb49934fc6c84c24bac"],["/tags/Teamviwer/index.html","b9a8c4ff2dcb4a89e2cc282effcaed7f"],["/tags/Time-complexity/index.html","915398323a923e7a1cf7d517cc6c9c83"],["/tags/Tpyora/index.html","5935aa4b03404bdf05691cff6b74051b"],["/tags/Transfer-learning/index.html","8b42f1e917c8f223eb433d13ebacfc93"],["/tags/Transformer/index.html","96b718f5ef92df3c59d877d85bb2421c"],["/tags/UserCF/index.html","b99c979340aab445bce2965cb7933cbe"],["/tags/Web-design/index.html","bd2db433949d9ba56d15b529f1f900a8"],["/tags/Wikipedia/index.html","51c7821a77936640f090fd98ed1ab87e"],["/tags/Write-a-paper/index.html","acbbea3936bd5485adaf5027f50da93d"],["/tags/index.html","136503aa050c170af2b763ff177f3daa"],["/top/index.html","8fbed521cc90ad421efdf0e0487d9c96"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
