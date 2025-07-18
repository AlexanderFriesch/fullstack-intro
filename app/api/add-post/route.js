import {NextResponse} from 'next/server'

export async function POST(request){
    const res = await request.json()
    const {title, content} = res;
    console.log({res})

const result = await prisma.post.create({
    data: {
        title,
        content,
        published: true,
        author:
        {
            create: 
            {
                name: 'Test2'
            }
        }
    }
})

    return NextResponse.json({data: res})
}