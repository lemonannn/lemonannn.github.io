function load_articles(type) {
    console.log("test");
    fetch('/data/projects.json')
        .then(res => res.json())
        .then(articles => {
            const article_list = document.getElementById('article_list');
            for (let i = 1; i <= articles.length; ++i) {
                article = articles[i-1];
                const item = document.createElement('div');
                item.classList.add("article_group");
                if (type == 'all' || article.type == type) {
                    if (article.display == "double") {
                        // get second article and increment
                        article2 = articles[i];
                        ++i;

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
                    else if (article.type == "games") {
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
        });
}