# docs/

以下二つで起動させる。

```
# パッケージのインストール
npm install

# WEBサーバーのスタート
npm start
```

## デプロイ

Github docs で公開可能。ただしセキュリティは無し。

GCP で Google Deploy で GAE にデプロイ。
セキュリティはかけられるはず。

AWS だと CodeDeploy で S3 にデプロイして ClouldFront で公開。
セキュリティはかけられるはず。
