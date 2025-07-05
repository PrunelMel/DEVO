import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), '/src/content/articles')

export function getAllArticles(){

    const filenames = fs.readdirSync(articlesDir);

    return filenames.map(
        (filename) => {

            const  filePath:string = path.join(articlesDir, filename);

            const fileContent:string = fs.readFileSync(filePath, 'utf-8');

            const {data} = matter(fileContent);

            return {

                ...data,

                slug: data.slug
            }
        }
    )
}

export function getArticlesBySlug(slug:string){

    const filePath:string = path.join(articlesDir, `${slug}.md`);

    const fileContent:string = fs.readFileSync(filePath, 'utf-8');

    const {data, content} = matter(fileContent);

    return {data, content }

}