const bio = [
  `Thanks for checking out my site! My name’s Elisabeth and I’ve been messing around with programming since 2018.`,
  `Here, you can learn a little bit more about me and the projects I’ve been working on. Any thoughts, feedback, questions, comments, jokes, etc. are appreciated so take a look around and feel free to reach out!`,
];

const aboutDev = [
  "After working in administration at a tech start-up, I was immediately drawn to the development and UI/UX side of the business, both the creativity and focus needed to architect something functional, beautiful, and efficient. I love seeing all the moving parts of a project come together and the satisfaction of a finished, tangible piece. Naturally, I had to learn more.",
  "I completed codecademy’s web development course, a slew of freeCodeCamp modules, collaborated with my friends in dev, and so on, but I knew I needed even more insight. Therefore, at the beginning of 2021 I graduated from the University of Richmond’s Web Development bootcamp which allowed me to build full-stack web applications from the ground up and leverage the hodge-podge of tools I’ve learned inside and outside of a classroom. With this, I started to actually feel like a proper developer.",
  "I am still at the beginning of my journey, but I am constantly learning and growing from the experiences I’ve had professionally and within the development community itself.  Currently, I’m working on refactoring my portfolio and previous projects to gain more practice with some of the technologies i’ve been enjoying messing around with as of recently. Take a look around and let me know what you think!",
];

const favTech = [
    {
        name: 'React',
        path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'
    },
    {
        name: 'NodeJS',
        path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z'
    },
    {
        name: 'NPM',
        path: 'M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z'
    },
    {
        name: 'JavaScript',
        path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
    },
    {
        name: 'CSS',
        path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z'
    },
    {
        name: 'Netlify',
        path: 'M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z'
    },
    {
        name: 'Hasura',
        path: 'M2.1216.0014c-.1221-.01-.2481.0345-.3354.1382C.448 1.7248.0338 6.021.7236 8.1721c.228.714.293 1.4694.1567 2.2072-.1332.7289-.2692 1.6118-.2692 2.2221C.6111 18.8946 5.712 24 12.0001 24c6.2909 0 11.3889-5.1024 11.3889-11.3986 0-.6133-.1334-1.4932-.2696-2.2221-.1362-.7378-.071-1.4931.157-2.2072.6899-2.151.2753-6.4473-1.0628-8.0325-.1746-.2074-.5033-.1777-.6483.0504l-1.6491 2.5895a1.2678 1.2678 0 0 1-1.6934.2757C16.4348 1.885 14.2973 1.2034 12 1.2034c-2.2973 0-4.435.6815-6.223 1.8518-.5507.3615-1.2849.2399-1.6934-.2757L2.4345.19a.4092.4092 0 0 0-.3129-.1886zM12 3.8046c1.347 0 2.626.3053 3.7716.8505 2.848 1.351 4.8582 4.1864 5.0358 7.499.009.157.0117.3143.0117.4743-.0029 4.865-3.958 8.8234-8.819 8.8234-4.8612 0-8.8165-3.9584-8.8165-8.8234 0-.16.006-.3173.012-.4743.1776-3.3155 2.1878-6.1509 5.0358-7.502C9.374 4.107 10.653 3.8047 12 3.8047zM9.5664 8.732a.2539.2539 0 0 0-.2192.1274c-.0444.08-.0444.1775.003.2546l1.8474 3.1112-2.4811 3.7866a.257.257 0 0 0-.0117.2607.252.252 0 0 0 .222.1333h1.8592a.2575.2575 0 0 0 .2133-.1157l1.3409-2.0976 1.202 2.0859a.2511.2511 0 0 0 .2191.1274h1.8325a.2471.2471 0 0 0 .2188-.1274c.0534-.08.0536-.175.0062-.2549l-2.2529-3.9081-1.9332-3.259a.2512.2512 0 0 0-.2192-.1244Z'
    },
    {
        name: 'graphQL',
        path: 'M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z'
    },
    {
        name: 'Material-UI',
        path: 'M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z'
    },
    {
        name: 'MongoDB',
        path: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'
    },
    {
        name: 'Express',
        path: 'M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z'
    },
    {
        name: 'Git',
        path: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.18'
    }

];

const facts = [
    {
        name: 'Breath of the Wild',
        path: './assets/botw.jpeg'
    },
    {
        name: 'Animal Crossing',
        path: './assets/acnh.jpeg'
    },
    {
        name: 'Sailor Moon',
        path: './assets/sailormoon.jpg'
    },
    {
        name: 'Derby',
        path: './assets/derby.jpg'
    },
    {
        name: 'Slippy',
        path: './assets/slippy.jpg'
    },
    {
        name: 'Richmond',
        path: './assets/richmond.jpeg'
    },
    {
        name: 'Charcuterie',
        path: './assets/charcuterie.jpeg'
    },
    {
        name: 'Holland',
        path: './assets/holland.jpg'
    },
    {
        name: 'Santander',
        path: './assets/santander.jpg'
    },
    {
        name: 'The Name of the Wind',
        path: './assets/nameofthewind.jpg'
    },
    {
        name: 'Dune',
        path: './assets/dune.jpg'
    },
    {
        name: 'Vader',
        path: './assets/darkmoon.jpg'
    },
];

const projects = [
  {
    title: "Hearth App",
    image: "./assets/hearth-demo.gif",
    demo: "https://hearthcommunity.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/Hearth-v2",
    tech: "React, JavaScript, HTML, CSS, MongoDB/Mongoose, Heroku, Express, Node.js, Animate.css",
    description:
      "This was my final group project for the University of Richmond coding bootcamp. We utilized MERN stack to build Hearth: Designed with community in mind, Hearth connects users to their next hobbie more easily than ever.",
  },
  {
    title: "Book Listings",
    image: "./assets/book-listings.gif",
    demo: "https://react-book-listings.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/react-book-listings",
    tech: "React, JavaScript, HTML, CSS, Heroku, React-Bootstrap, Node",
    description:
      "AS a reader, I WANT to be able to record book data SO THAT I have remember those I'm interested in reading.",
  },
  {
    title: "Employee Directory",
    image: "./assets/employee-directory.gif",
    demo: "https://eaclumpkens.github.io/employee-directory/",
    repo: "https://github.com/eaclumpkens/employee-directory",
    tech: "React, JavaScript, HTML, CSS, GH-Pages, React-Bootstrap, Node",
    description:
      "An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.",
  },
  {
    title: "Budget Tracker",
    image: "./assets/budget-tracker.gif",
    demo: "https://budget-tracker-1000.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/budgetTracker",
    tech: "JavaScript, HTML, CSS, Heroku, Express, Node, Mongoose, MongoDB",
    description:
      "Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.",
  },
  {
    title: "Fitness Tracker",
    image: "./assets/fitness-tracker.gif",
    demo: "https://https://fitness-tracker-5000.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/fitnessTracker",
    tech: "JavaScript, HTML, CSS, Heroku, Express, Node, Mongoose, MongoDB, Node",
    description:
      "A consumer will reach their fitness goals more quickly when they track their workout progress.",
  },
  {
    title: "gitWorkd",
    image: "./assets/gitworkd-app.gif",
    demo: "https://gitworkd.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/gitWorkd",
    tech: "Heroku, JavaScript, HTML, CSS, Express, Handlebars, mySQL, Node",
    description:
      "Gitworkd is a platform for hosting and exploring open source projects. It is easy to get lost in the vast world of GitHub, so we thought it would be beneficial to create a centralized ground for users to post projects and applications that are exclusively open to collaboration. Users are able to explore repositories posted by other users, save those repositories, and add their own repositories all within a simple and intuitive environment.",
  },
  {
    title: "Restaurant App",
    image: "./assets/restaurant-app.gif",
    demo: "https://https://hero-burger-app.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/restaurantApp",
    tech: "JavaScript, HTML, CSS, Express, Handlebars, mySQL, Node",
    description:
      "Burger logger with MySQL, Node, Express, Handlebars, and ORM following MVC design pattern; Node and MYSQL to query and route data; Handlebars to generate HTML. This app was purely to test my experience with Handlebars, ORM, and MVC.",
  },
  {
    title: "Employee Tracker",
    image: "./assets/tracker-app.gif",
    demo: "",
    repo: "https://github.com/eaclumpkens/employeeTracker",
    tech: "JavaScript, HTML, CSS, Express",
    description:
      "Allows the user to view and manage departmental and employeeTracker data via the command line.",
  },
  {
    title: "Readme File Generator",
    image: "./assets/readme-generator.gif",
    demo: "",
    repo: "https://github.com/eaclumpkens/readmeGenerator",
    tech: "Javascript, Node, Heroku, HTML, CSS, Express",
    description:
      "Uses the command line to generate a readMe file using the inquirer, util, and fs node dpendencies. The user is prompted via the command line to input read me information. The user is able to input bullets, demo images, and links dynamically. The Table of Contents navigates the document and titles and headers are appended logically. A demo video as can be found by clicking the image.",
  },
  {
    title: "Quick Jot",
    image: "./assets/quick-jot.gif",
    demo: "https://https://quick-jot.herokuapp.com/",
    repo: "https://github.com/eaclumpkens/noteTaker",
    tech: "Heroku, Node (inquirer, util, fs), Javascript, CSS",
    description:
      "For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.",
  },
  {
    title: "Food &Fun",
    image: "./assets/Food&Fun.gif",
    demo: "https://eaclumpkens.github.io/foodtruckRepo/",
    repo: "https://github.com/eaclumpkens/foodtruckRepo",
    tech: "JavaScript, HTML, CSS, Open Weather API, Yelp API, TicketMaster API, Bulma, jQuery, Font Awesome, Google Fonts",
    description:
      "food&fun uses multiple APIs to create an event planning app based on input zip code and date. Weather for the week is rendered as well as local food and event information based on the date provided. This was my first group project.",
  },
  {
    title: "Team Builder",
    image: "./assets/team-builder.gif",
    demo: "https://eaclumpkens.github.io/teambuilder/output/team.html",
    repo: "https://github.com/eaclumpkens/teamBuilder",
    tech: "Javascript, Node (inquirer, util, fs), GH-Pages",
    description:
      "Uses inquirer npm package to prompt user for their email, id, and specific information based on their role with the company - an intern may provide their school, whereas an engineer may provide their GitHub username. App runs as a Node CLI to gather information about each employee.",
  },
  {
    title: "Weather App",
    image: "./assets/weather-app.gif",
    demo: "https://eaclumpkens.github.io/teamBuilder/output/team.html",
    repo: "https://eaclumpkens.github.io/weatherapp/",
    tech: "JavaScript, HTML, CSS, Open Weather API, jQuery, Bootstrap, Font Awesome, Google Fonts, GH-Pages",
    description:
      "Uses Open Weather API and Moments.JS to render weather data based off the user's input city. Current as well as future weather data is presented with conditions. The user's last search is saved to their local storage and previous searches are appended to the documentas clickable buttons.",
  },
  {
    title: "Code Quiz",
    image: "./assets/code-quiz.gif",
    demo: "https://eaclumpkens.github.io/codequiz/",
    repo: "https://github.com/eaclumpkens/codeQuiz",
    tech: "JavaScript, HTML, CSS, Bootstrap, Font Awesome, Google Fonts, GH-Pages",
    description:
      "Code Quiz is dynamic web app that tests the users knowledge on the front-end programming skills, with the potential to be easily expanded or modified for other quizzes. The challenge of this project was to complete it without jQuery.",
  },
  {
    title: "Day Planner",
    image: "./assets/day-planner.gif",
    demo: "https://eaclumpkens.github.io/dayplanner/",
    repo: "https://github.com/eaclumpkens/dayPlanner",
    tech: "JavaScript, HTML, CSS, jQuery, Bootstrap, Font Awesome, Google Fonts, GH-Pages",
    description:
      "A same-day planner that allows you to locally store input hourly tasks. Users can save their data via save buttons, current date and times are dynamically displayed as well as color coded depending on whether or not the hour has passed.",
  },
  {
    title: "Hero Burger",
    image: "./assets/reservation-app.gif",
    demo: "https://eaclumpkens.github.io/reservationapp/",
    repo: "https://github.com/eaclumpkens/reservationApp",
    tech: "JavaScript, HTML, CSS, jQuery, Express, Node, jQuery, GH-Pages",
    description:
      "Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.",
  },
  {
    title: "Password Generator",
    image: "./assets/password-generator.gif",
    demo: "https://eaclumpkens.github.io/passwordGenerator/",
    repo: "https://github.com/eaclumpkens/passwordGenerator",
    tech: "JavaScript, HTML, CSS, jQuery, Font Awesome, Bootstrap, Google Fonts, GH-Pages",
    description:
      "The user is prompted via JavaScript alerts the desired length and character type of their randomized password. Input is validated on input and rendered to the DOM.",
  },
];

module.exports = { bio, aboutDev, favTech, facts, projects };
