# 荀傲作品集

这是一个静态作品集网页，面向 `AIGC编导｜短视频编导` 求职投递。

## 本地预览

直接打开：

```text
/Users/bruce/Documents/New project 3/index.html
```

或在本目录启动静态服务：

```bash
python3 -m http.server 5173
```

然后访问：

```text
http://127.0.0.1:5173
```

## 发布说明

页面、封面图和工作流图片已经在仓库内，可以发布到 GitHub Pages、Cloudflare Pages、Vercel 或 Netlify。

视频文件当前使用本机素材的符号链接，主要用于本地预览。公开视频链接需要把视频上传到可公网访问的位置后，替换 `index.html` 里的 `video src`：

- B站、腾讯视频、抖音/视频号公开视频或私密可访问链接
- Cloudflare Stream
- Cloudflare R2 / 阿里云 OSS / 腾讯云 COS 等对象存储
- 飞书云文档获得链接的人可查看，但打开体验会弱于独立视频托管

如果用对象存储，建议上传压缩后的 MP4，单条视频控制在 30-80MB 内，打开速度会更适合 HR 和业务负责人在聊天软件中查看。
