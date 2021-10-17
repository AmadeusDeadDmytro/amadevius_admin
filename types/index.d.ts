interface IArticle {
    id: string;
    title: string;
    summary: string;
    content: string;
    tags?: [any];
    cover?: string;
    toc: string;
    views: number;
    category: any;
    status: string;
    password?: string; // Access password
    needPassword: boolean;
    isRecommended?: boolean;
    isCommentable?: boolean; // Can comment
    createdAt: string;
    updateAt: string;
    publishAt: string;
}

interface IComment {
    id: string;
    name: string;
    email: string;
    content: string;
    html: string;
    pass: boolean;
    createAt: string;
    userAgent: string;
    article?: IArticle;
    parentCommentId: string;
    hostId: string;
    isHostInPage: boolean;
    replyUserName?: string;
    replyUserEmail?: string;
    children?: [IComment];
}