function load_articles(type) {
    console.log("test");
    fetch('/data/projects.json')
        .then(res => res.json())
        .then(articles => {
            let used_articles = []
            const article_list = document.getElementById('article_list');
            for (let i = 1; i <= articles.length; ++i) {


                if (!used_articles.includes(i)) {
                console.log('passed' + i)


                article = articles[i-1];
                const item = document.createElement('div');
                item.classList.add("article_group");
                if (type == 'all' || article.types.includes(type)) {
                    if (article.display == "double") {
                        // get second article and increment
                        for (let j = i; j <= articles.length; ++j) {
                            article2 = articles[j];
                            if (type == 'all' || article2.types.includes(type)) {
                                used_articles.push(j+1)
                                console.log('added' + j)
                                break;
                            }
                        }

                        item.innerHTML = `

                        <a href = "${article.link}">
                            <div class = "big_article">
                            <img src = "/project_images/${article.image}">
                            <div class = "text_box">
                            <div class = "headline">
                                ${article.name}
                            </div>
                            <div class = "blurb">
                                ${article.blurb}
                            </div>
                            </div>
                            </div>
                        </a>
                        <div class = "divider">

                        </div>
                        <a href = "${article2.link}">
                            <div class = "small_article">
                            <img src = "/project_images/${article2.image}">
                            <div class = "text_box">
                                <div class = "headline">
                                ${article2.name}
                                </div>
                                <div class = "blurb">
                                ${article2.blurb}
                                </div>
                            </div>
                            </div>
                        </a>

                    `

                    article_list.appendChild(item);

                    }
                    else if (article.types.includes("games")) {
                        item.innerHTML = "";
                    }
                    else if (article.display == "single") {
                        item.innerHTML = `
                        
                        <a href = "${article.link}">
                            <div class = "big_article">
                            <img src = "/project_images/${article.image}">
                            <div class = "text_box">
                            <div class = "headline">
                                ${article.name}
                            </div>
                            <div class = "blurb">
                                ${article.blurb}
                            </div>
                            </div>
                            </div>
                        </a>
                        
                        `;

                        article_list.appendChild(item);
                    }
                }


                }

            }
        });
}