/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/09/【NLP比赛】中国中文信息学会文本溯源技术评测（SMP-ETST）Ranking-First/index.html","af2f165acc6c762f985d1518c8b289e1"],["/2018/07/14/Hexo_Next_博客搭建记/index.html","8ac48682fc4215feec5acbbb2ef5f16b"],["/2018/07/20/Use-linux-well/index.html","d7448510f5b8351d629228e81e492311"],["/2018/07/22/wikipedia-train-traditional-chinese-embedding（word2vec）model/index.html","0b5d9f89d578532c410d37dea7e5829d"],["/2018/07/26/linux-uploading-baiduyunpan/index.html","63cd5e39cfae5ced17b09f34a96deb29"],["/2018/07/29/Github-and-Coding-bulid-blog/index.html","998474bea1cfbcc977bb0006b6e23b47"],["/2018/08/07/Investigate-domestic-data-labeling-companies/index.html","b53b9cdd01c9c778713c7c2aedd815e2"],["/2018/08/17/Summary-of-time-complexity-and-space-complexity/index.html","1dc99f234c1c35c979508800cdc6ec00"],["/2018/09/07/Dual-NIC-configuration/index.html","6c2b363599b63f698ffa1952868815bd"],["/2018/09/09/win10-software/index.html","e66313fab9513e6377ecb74631853adb"],["/2018/09/17/Configuring-the-best-development-environment-with-pycharm-and-jupyter-notebook/index.html","dde805f0997919a9017477b273042784"],["/2018/09/29/How-to-write-a-great-paper/index.html","26bd1633324b4e5172cb1174c06bb2f2"],["/2018/10/27/From-transformer-architecture-to-transfer-learning/index.html","895b72928550d91ac44cce1b5e55e0d6"],["/2018/11/16/an-unknown-person-is-not-unknown/index.html","65b26e1fcb01ccd1a50b86cc02c6ebda"],["/2019/01/19/python3-tips/index.html","565de5bf34253d8e75596025f274e8b6"],["/404.html","3613f1ffb7d7b8657f04f434496ca70d"],["/about/index.html","70015192c24e87268483069e262dbe12"],["/archives/2018/07/index.html","ce1db621ef340b57b6ac049f9f3865b1"],["/archives/2018/08/index.html","d401ee93403f833656e457a0e1daad1c"],["/archives/2018/09/index.html","269e2687c4e3b720a25b02b6a84d3e77"],["/archives/2018/10/index.html","7801da6d001f6443b79bea98df6c4e47"],["/archives/2018/11/index.html","fabcebd7151c024e5955693fae7fea18"],["/archives/2018/index.html","a2b4f75a20d69aea098f3890c8b85e90"],["/archives/2018/page/2/index.html","09c036bb6eb1e62c200df7025834f375"],["/archives/2019/01/index.html","653cb5fdbc8b05e3b7b188728825a4fc"],["/archives/2019/index.html","4a606527fda78eac66c8f53b4f78081f"],["/archives/index.html","cd859fb107f99bd7f62ce61d2d21b7fc"],["/archives/page/2/index.html","a20f81e374d83fbda9f9aa4f53262603"],["/baidu_verify_tvNc42Gx3A.html","2adb6a363213ec96a2f5aff57b4f3334"],["/categories/Academic/Writing/index.html","568fbff2f0630ec1a02a8ca111f1d210"],["/categories/Academic/index.html","b6c6dee275763abdd9796816546e0261"],["/categories/Algorithm/index.html","54cd03de0541a4563b787f735d8a5546"],["/categories/Deep-learning/Pre-training/index.html","e35371b77d4f1dae083d35699492ae9f"],["/categories/Deep-learning/index.html","1a5cd3bc4612ec12094ff3ffa3bdd516"],["/categories/Linux/index.html","c3fdac6793dd4e73ed4e0292babe9078"],["/categories/Machine-learning/Data-labeling/index.html","540dfcb965e4359d6f8df536808ee8d7"],["/categories/Machine-learning/index.html","b4cb5c18be7eb2f8ec8ea34ca573fe26"],["/categories/Movie/Absurd-comedy/index.html","0c6b66bb104323e1df5d021447a9f156"],["/categories/Movie/index.html","4d635c59f52ac097afde3a731835ddbc"],["/categories/NLP/Competition/index.html","c612ab2c148c4ab31d0ffbc7bcfb88f7"],["/categories/NLP/Word2vex/index.html","2fadc2dad01c826587b9b969c5d41fb5"],["/categories/NLP/index.html","fc967c36e62a1cb10ea8f1aeaeae0da4"],["/categories/Operating-system/Win10/index.html","aa83209c8f26fe894e112e4651031bc7"],["/categories/Operating-system/index.html","0b299a9be525155afa9800ca034a5089"],["/categories/Programming-language/Python3/index.html","b5fe0a3143034db786246c274d1df333"],["/categories/Programming-language/index.html","64e6443b4dee6eda73a45149fb7851bd"],["/categories/Tool/Computer-network/index.html","05721d1ebd3127dca682b8cb5618c13a"],["/categories/Tool/Server/index.html","8ffbd612ade67d4ddb2c4d4a485fe422"],["/categories/Tool/index.html","2c3e012fa99468f7635f3b7efb5ca41c"],["/categories/blog/index.html","95f8d9f864144c8fd6f8ee2868832dc4"],["/categories/index.html","8c914814154ea9717914423e532541af"],["/css/main.css","f8c926c2f7912938b1007f61901775d6"],["/google47671999b73952db.html","e0b678617f67df2be4b6efe35702056c"],["/images/Wachat_money.png","adf5c583fd24719d2154005a6290129f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay_money.png","30225ede0367033ba4a2ea350e618946"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/christmas_ID_round.png","e57687a5869af45517673a93c5cc01ea"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/imagess/A_job/2019校招薪资_1.png","d8550c21dead3342f7bc80a3923e9b0a"],["/imagess/A_job/2019校招薪资_2.png","3f8f6bc1cf5d1ec2bb02781323c84ae1"],["/imagess/A_job/2019校招薪资_3.png","12e86a4219e1a8180012b8c6dc2dc522"],["/imagess/A_job/AI算法面试如何准备.jpg","02a7e8620db55a1a30bfa6b4ee88bfe2"],["/imagess/A_job/Domain Expert.jpg","03308dcdb6ea23757d26587251854f37"],["/imagess/A_job/LSTM_1.png","2d9c10cb388d2b256ea6955ee8d5ad4a"],["/imagess/A_job/LSTM_2.png","e87a95bd6fdd856961f230badd1096aa"],["/imagess/A_job/LSTM_3.png","ba55f8b8c6409fc3e4c3d7c8b36d2b32"],["/imagess/A_job/LSTM_4.png","ada6286c953d830fbdd3c23e971e4312"],["/imagess/A_job/NLP架构图.png","79d7fa771f52dbbbe594eb8088aebff5"],["/imagess/A_job/Path finder.jpg","9643030457186173eb4e2e351ed2e6fa"],["/imagess/A_job/Rookie.jpg","4ae1216179d095b03c5ccecc3e0cdcaf"],["/imagess/A_job/keep learning.jpg","f817e50af60bce1156f1c0a636e864ee"],["/imagess/A_job/semantic　similarity.png","75bd7b987d61056929adc99e6abed067"],["/imagess/A_job/复述样例.png","a7153c453d929312b729f7148ce88603"],["/imagess/A_job/激活函数.png","94f5398169e7cf1c8871bb42e9b29151"],["/imagess/A_job/相似性度量PRC曲线图.png","0499e701103ac95ff31123384842e36d"],["/imagess/A_job/该做什么.png","b60f36990375e02625c259b757299273"],["/imagess/A_job/阿里巴巴组织架构.jpg","0b75de5d74c2cf9e9c44a1935b9f527b"],["/imagess/A_job/阿里星的面试记录.png","b3d5f26c8c609997e6b82c8663f0d586"],["/imagess/Data_structure_and_algorithm/冒泡排序1.gif","d4c88b8cc620af6af67c33910899fcf7"],["/imagess/Data_structure_and_algorithm/冒泡排序2.gif","c33a1651e1f72af822f53a1a369d80a9"],["/imagess/Data_structure_and_algorithm/堆排序.gif","b7907d351809293c60658b0b87053c66"],["/imagess/Data_structure_and_algorithm/希尔排序.gif","f9616f6892819e579a2d4ab10256a732"],["/imagess/Data_structure_and_algorithm/归并排序.gif","a29c0dd0186d1f8cef3c5ebdedf3e5a3"],["/imagess/Data_structure_and_algorithm/归并排序2.gif","2ae46125cf054d55c30b7a9839eb7695"],["/imagess/Data_structure_and_algorithm/快速排序.gif","d4e5d0a778dba725091d8317e6bac939"],["/imagess/Data_structure_and_algorithm/插入排序1.gif","6e67d1c722106442b422ee53e98575b3"],["/imagess/Data_structure_and_algorithm/插入排序2.gif","9ce56fa906ecc71adb5110c7fc9797a0"],["/imagess/Data_structure_and_algorithm/选择排序1.gif","f20b8898585b3ca03843d93ce2c35a68"],["/imagess/Data_structure_and_algorithm/选择排序2.gif","2bdd6b162c403d376c56c02e8a5560af"],["/imagess/Data_structure_and_algorithm/鸡尾酒排序.gif","c703276ad071329e7d867facdf20e4bb"],["/imagess/Git_learn/git rebase1.png","e68be23d5247a71a6e83620bdc470eeb"],["/imagess/Git_learn/git rebase2.png","ad33f746eeb9df076ae38025a52910e8"],["/imagess/Git_learn/git rebase3.png","ea9cb10240cf11745b793175fbd752a1"],["/imagess/Git_learn/git rebase4.png","011153fe5bf3dd47959108c121b25650"],["/imagess/Git_learn/git revert1.png","0b4e269a5818b6e0d8d042b0fd5925f7"],["/imagess/Git_learn/git revert2.png","ee69b48b4fd9c36ea5ab1eb3877979b1"],["/imagess/Information_integration/2017工业设计软件领域.png","6c8d51131b45debbb84ae7058608154d"],["/imagess/Information_integration/2018 Z世代.png","041df585b41dde2ad99cb22f9a04a801"],["/imagess/Information_integration/985高校生毕业去哪里.png","df647d19764bfb5401158d838eb578fa"],["/imagess/Information_integration/两次牛市市场变化.png","2f2150c5e95b6f38bf02d5b168aad883"],["/imagess/Information_integration/中日人口结构对比.png","9b6b6f2389ca8e754dcdeea55a422e3c"],["/imagess/Information_integration/二线城市抢人政策.png","e368fd86c1fbd00181f504b652f6e12e"],["/imagess/Information_integration/互联网2019展望.png","9c15169a8a49c44da4b11815ab7653fa"],["/imagess/Information_integration/京沪深三大城市发展.png","871030393baf0a3413aca2bdc8da2776"],["/imagess/Information_integration/恐怖的中资显示屏三巨头.png","7ab93a3ec4640151ae4f7734c542fbf6"],["/imagess/Information_integration/时机与命运.png","67bd85eb3809a5881761ee4f1147ceec"],["/imagess/Information_integration/有趣又有利的社交裂变增长.png","b33919ab2104f016ad61d9a00534b5a2"],["/imagess/Information_integration/未来社会变迁.png","929f822efa6a6e7357f3d39d843a67a8"],["/imagess/Information_integration/本省高校的毕业生会留下吗.png","0956d3179351e2ace9c57a6bc8e85be5"],["/imagess/Information_integration/杭州创业氛围.png","84bd31c6f7b7eb8f7d5f3f6c2d698e2f"],["/imagess/Information_integration/泛文化产业 & 粉丝经济.png","2374f89af6f44db8ab695992ec82ebc2"],["/imagess/Information_integration/牛市各时期指标特征总结.png","9d7756f897b099be1ffd520cbe8480d1"],["/imagess/Information_integration/电子芯片产业的发展.png","569c4f91a48de030b2295bc37c4ddd8d"],["/imagess/Information_integration/科创版与A股的异同.png","5afef919ddd3f9f6e8139250ec8c70a6"],["/imagess/Information_integration/越南投资状况.png","4505d48b4fe91c1df0e45d4cbe32ae68"],["/imagess/Python_tips/浅拷贝.png","883191264cc9e148a2302a14b28f38bb"],["/imagess/Python_tips/深度拷贝.png","5b0c84b1483fb6492113b391ad32a53e"],["/imagess/Python_tips/赋值引用.png","a9924cb85c2d81a2a9db5f9fceea99f9"],["/imagess/Who_am_I/MBTI_1.png","7ef605d24faa69dcbfbe8451918522a0"],["/imagess/Who_am_I/MBTI_2.png","d644c644e0a4010def20b805c111a20c"],["/imagess/Who_am_I/MBTI_3.png","a4a646405fa921d62f55a2643ea3f837"],["/imagess/Who_am_I/MBTI_4.png","21ff818f43ba2b5036f7e9a916b8d4fb"],["/imagess/Who_am_I/MBTI_5.png","b2f13c73f65c1e3d10bf809b16be2026"],["/imagess/Who_am_I/MBTI_6.png","50e1f15b86d629a6aff9b9e2ab57d462"],["/imagess/玮.png","5147e502cf727ae8475f84dac84d1be7"],["/imagess/玮.svg","643456c390cacc2e5049660eeac8e78d"],["/imagess/玮_16.png","a89344157babb51c0b5b19dc4b2dd316"],["/imagess/玮_32.png","a71b7dce171519c39cdb7bfd698a9665"],["/index.html","1fc0677d1d2b9f206c951da00980dd33"],["/js/crypto-js.js","a9d090555f71c39019be28a229179de2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","2dd2ee556391c3fe23a303e3902c4ad1"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/custom.js","a42eea7478955b886d8ec1f5c3bc6f5d"],["/js/src/custom_title.js","416a4fc617a5635326ed4a578ee3f3ea"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","fd5559b88c9328c9a419b0232e0ef1bd"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/particle.js","b1a64c0b4d871a43a2b873c8896bed46"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","975a23f7195fe8fe6414fc50fe325e15"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","399cbeba1333a1013f011f78643aa9d2"],["/tags/A-Cool-Fish/index.html","f216c0d619a9d3e92bea314f81488821"],["/tags/Absurd/index.html","2a32b60e66ad36064deadd87c0ef78e1"],["/tags/Attention/index.html","3d74c6602403e97e7c5271ddfe017641"],["/tags/BERT/index.html","27eb3d6d99775244a01f30fb17a52ae2"],["/tags/BoW/index.html","3e3f576a1cfcd1bddd93f52a639d8086"],["/tags/Bypy/index.html","6faea5fda43255f0406ea583861934cd"],["/tags/Coding-pages/index.html","f257926a83b082d7b4c530a180020318"],["/tags/Comedy/index.html","1dd9e64a56d6c180da94752789b1d9e1"],["/tags/Conference-papers/index.html","e632cc173bf91a4cbd4639b7b3c0cf59"],["/tags/Copy/index.html","3a74da2a9130b8919eb49e146baa1ee3"],["/tags/Crowdsourcing/index.html","78b9837df8a6e7c6fd912215f596fc7c"],["/tags/DNSpod/index.html","94698ea09c78de0de51f7ec7e0f5f3c8"],["/tags/Data-labeling/index.html","9ac9cae88915d12f32150103e879312a"],["/tags/Deep-learning/index.html","5bc53982c92c515892e68157147d51fc"],["/tags/Deepcopy/index.html","2b28cf169717bf0aa0de7d0a74147319"],["/tags/Domain/index.html","f2a6325b82969f304567e2f0e1d32b6e"],["/tags/ELMo/index.html","a2f1a996eb4e22887c89384547f61e8f"],["/tags/Embedding/index.html","67100eda6dcd68f6817c9f54153c62ca"],["/tags/File-operations/index.html","b46bc54893257e541ca260f061a605f2"],["/tags/Flux/index.html","b4a983c146fab87097973e5639030d5d"],["/tags/GNMT/index.html","a4b69ea3aa834a3d474784ae8180beb7"],["/tags/Generator/index.html","4bfa134c17bed265aca040c5366e54b5"],["/tags/Gensim/index.html","3a99a27e54e721ea63b7f1afd5bc8dd5"],["/tags/Github-pages/index.html","22b2449c87e67965f0663866ce5ff6c3"],["/tags/Hexo/index.html","ac54fe6f3d58c6b3bc8bd37823e91d1f"],["/tags/Hop-number/index.html","5f20ac69cf12c3b24ca14d36fab35e54"],["/tags/Information-retrieval/index.html","3f61fd56eea71c6e949fd631a7619437"],["/tags/Inverted-index/index.html","4c27ef6ab3eaa0d48d113770bf428465"],["/tags/Iterator/index.html","1b5a5c38375d88f45987ed80e59bc5a7"],["/tags/Jupyter/index.html","e6469cb887846ee654be76943f567b19"],["/tags/Linux/index.html","498ff6b6dcc89ace5cd39de66ce3e38d"],["/tags/Machine-learning/index.html","97c148a7f8a9edeaaa99b71d0fda3c39"],["/tags/Movie/index.html","004e906c35ed441ee902a814fd7e5ee9"],["/tags/Multi-head-attention/index.html","ad22627e7375e0b13a0e92648cbacf47"],["/tags/Multithreading/index.html","32198c19aee450fa290b9cb0445c64af"],["/tags/N-gram/index.html","233b56d8bca4f270293567ef1c83bea6"],["/tags/Next/index.html","b614a20ee153bf228880d0d6a0692e01"],["/tags/Opencc/index.html","49d19cae9d3dff7590d801e1a8acca70"],["/tags/Paraphrase/index.html","949c61477bd705a1a88e88ca3d83faee"],["/tags/Positional-encoding/index.html","6de87c515f84c254e7ea9805bc03d8fd"],["/tags/Pre-training/index.html","eb269a2bda9fb02f01019a63d9d455da"],["/tags/PyCharm/index.html","619efe03b7c036a38c39a20e5a95cd28"],["/tags/Python3/index.html","5cb5e07873f9eac21d5e697cb928e0e8"],["/tags/Routing-table/index.html","f220606cda90f09782e487fd562f6dae"],["/tags/SSL/index.html","a2b687ef27a62bb2bf999667f83d5ddb"],["/tags/Segment/index.html","58c04a62df258aa37572b9c1dd859117"],["/tags/Self-attention/index.html","9e986348f003872e1ff4176402ef3d60"],["/tags/Semi-supervised-learning/index.html","3a76078a4d816b86b9350389f3771ea2"],["/tags/Shadowsocks/index.html","45c84fa595b30be40275baa7094ef4ee"],["/tags/Shell/index.html","ae3c9a6202460a7d4844787cc7fcf84d"],["/tags/Space-complexity/index.html","45c9dd81a3b798d7ee1e01463c528559"],["/tags/Teamviwer/index.html","9ec036c47283ee239c6128f3e670d9d5"],["/tags/Time-complexity/index.html","d86ab45b4de387f41d50277d50802105"],["/tags/Tpyora/index.html","6dab35cbf17cf0bfbe88f3fbe4b8f81d"],["/tags/Transfer-learning/index.html","a62c49306ebdd086cbd99d403f902567"],["/tags/Transformer/index.html","022df6303c80cc9f08f3d16aef139776"],["/tags/Web-design/index.html","be2ccbdcfbd10f1c62b2c4243656b105"],["/tags/Wikipedia/index.html","b7998b3de2614025f760f79278ad4ab4"],["/tags/Write-a-paper/index.html","848dfd3792b1dac53d1cf031a5c21ae3"],["/tags/index.html","bae91ef53eb7c600fb3d94581b1c79a0"],["/top/index.html","d3ab955def9f6688cf230f8f0ef2d402"]];
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
