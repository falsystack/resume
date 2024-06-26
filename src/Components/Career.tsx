import React from 'react';
import styled from "styled-components";

const Career = () => {
    const CareerContainer = styled.section`
        padding: 0 2rem;
    `;

    const CareerHeader = styled.h2`
        margin: 4rem 0 2rem;
        font-size: 2.8rem;
    `;
    const Period = styled.span`
        color: blueviolet;
        font-weight: bolder;
    `;
    const RowLeftHeader = styled.h3`
        font-size: 2rem;
        margin: 0 0 1rem;
    `
    const Project = styled.div`
        &:first-child {
            padding-top: 0;
        }

        box-sizing: border-box;
        padding: 1.5rem 0;

        & > h4 {
            font-size: 1.5rem;
            margin: 0 0 1rem;
        }

        & > .time {
            display: block;
            margin-bottom: 1.5rem;
        }

        & > h5 {
            font-size: 1.3rem;
            margin: 0 0 0.5rem;
        }
    `;

    return (
        <CareerContainer>
            <CareerHeader>職務経歴<Period>。</Period></CareerHeader>
            {/*<div className={"row"}>*/}
            {/*    <div className={"row-left"}>*/}
            {/*        <RowLeftHeader>companyName<Period>。</Period></RowLeftHeader>*/}
            {/*        <span className={"role"}>RoleName</span>*/}
            {/*        <span className={"time"}>*/}
            {/*           <time dateTime={"2022-04"}>2022.04</time>*/}
            {/*           ~*/}
            {/*           現在*/}
            {/*   </span>*/}
            {/*    </div>*/}
            {/*    <div className={"row-right"}>*/}
            {/*        <Project>*/}
            {/*            <h4>projectName</h4>*/}
            {/*            <span className={"time"}>*/}
            {/*                <time dateTime={"2022-05"}>2022.05</time>~現在*/}
            {/*            </span>*/}
            {/*            <h5>詳細</h5>*/}
            {/*            <p>旧環境から新環境へのマイグレーションをしております、システム改善はない見込みです。Javaや.NETのバージョンアップに対応します。</p>*/}
            {/*            <h5>私がやった事</h5>*/}
            {/*            <p>現在旧環境での結合テストを担当しております。</p>*/}
            {/*        </Project>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>Tagbangers<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>バックエンドエンジニア</span>
                    <span className={"time"}>
                       <time dateTime={"2024-01"}>2024.01</time>
                       ~
                       現在
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>税金関連アプリケーション</h4>
                        <span className={"time"}>
                            <time dateTime={"2024-02"}>2024.04</time>
                            ~
                            現在
                        </span>
                        <h5>詳細</h5>
                        <p>税金関連サービスの改修プロジェクトに参画、実装方法の提案や税金サービスの改修を担当しております。</p>
                        <h5>私がやった事</h5>
                        <p>マイクロサービスで構成されている税金関連サービスに参画、税金関連エンティティやテーブルの修正それに伴う業務ロジックの修正などう担当しました。。</p>
                        <li>
                            Java, Spring, Hibernate, Dockerを用いて税金関連エンティティやテーブルの修正それに伴う業務ロジックの修正などう担当しました
                        </li>
                        <li>
                            C4モデルの作成
                        </li>
                    </Project>
                    <Project>
                        <h4>デザイン受賞サービス</h4>
                        <span className={"time"}>
                            <time dateTime={"2024-02"}>2024.02</time>
                            ~
                            現在
                        </span>
                        <h5>詳細</h5>
                        <p>デザイン関連サービスで使われるエントリーの応募、取り下げ時のメール送信機能及びPDF作成機能</p>
                        <h5>私がやった事</h5>
                        <p>マイクロサービスで構成されているデザイン関連サービスに参画、Kubernetesの初体験することができました。</p>
                        <li>
                            Java, Spring, Kafka, AWS SESを用いてメール送信機能をEvent
                            Driven方式で非同期的に送るロジックの実装
                        </li>
                        <li>
                            Jasperを利用したPDF作成機能の実装
                        </li>
                        <li>
                            AWS LambdaとSESを用いてメール転送機能作成
                        </li>
                        <li>
                            Admin ページの修正
                        </li>
                    </Project>
                    <Project>
                        <h4>動画配信サービス</h4>
                        <span className={"time"}>
                            <time dateTime={"2024-01"}>2024.01</time>
                            ~
                            <time dateTime={"2024-01"}>2024.01</time>
                        </span>
                        <h5>詳細</h5>
                        <p>動画配信サービスで使われる設問のCSVデータをインポートする作業</p>
                        <h5>私がやった事</h5>
                        <p>転職後初めて担当したタスクです、初めてDDDとマイクルサービスを経験することができました。フロントエンジニア１名と一緒に進めました。</p>
                        <li>
                            EventStormingの初体験
                        </li>
                        <li>
                            Java, Spring, Jpaを用いてBatch処理の実装
                        </li>
                        <li>
                            ElasticSearchのRead-Modelの作成
                        </li>
                        <li>
                            プロジェクト全体の例外処理の実装
                        </li>
                    </Project>
                </div>
            </div>
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>allofthem株式会社<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>バックエンドエンジニア</span>
                    <span className={"time"}>
                       <time dateTime={"2023-07"}>2023.07</time>
                       ~
                       <time dateTime={"2023-12"}>2023.12</time>
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>iChain Base</h4>
                        <span className={"time"}>
                            <time dateTime={"2023-07"}>2023.07</time>
                            ~
                            <time dateTime={"2023-12"}>2023.12</time>
                        </span>
                        <h5>詳細</h5>
                        <p>iChainというパートナー会社のサービスを開発しております、Java,
                            Springを用いてWASの開発が主な業務です。</p>
                        <h5>私がやった事</h5>
                        <p>Java Mail SenderからAWS
                            SESに書き換え、サービス関連新規機能開発、補修、修正業務を担当しております。</p>
                    </Project>
                </div>
            </div>
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>株式会社bitA<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>PG(フリーランス)</span>
                    <span className={"time"}>
                       <time dateTime={"2022-07"}>2022.07</time>
                       ~
                       2023.04
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>大手サプリメントECサイトリニューアル案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2023-01"}>2023.01</time>~
                            <time dateTime={"2023-04"}>2023.04</time>
                        </span>
                        <h5>詳細</h5>
                        <p>HTMLでハードコーディングされていたのを新しい技術でリニューアルする案件</p>
                        <h5>私がやった事</h5>
                        <p>fastifyというNodeJSのフレームワークを用いてBFF(Backend For
                            Frontend)のAPI実装を担当しました。実際のバックエンドよりは複雑度は低いですが本当に面白くていろんな事を学ぶプロジェクトでした。</p>
                        <li>ログインAPIの実装</li>
                        <li>ログアウトAPIの実装</li>
                        <li>マイページTOP画面APIの実装</li>
                        <li>注文入力画面APIの実装</li>
                        <li>等々</li>
                    </Project>
                    <Project>
                        <h4>産業廃棄物DX案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-10"}>2022.10</time>
                            ~
                            <time dateTime={"2022-12"}>2022.12</time>
                        </span>
                        <h5>詳細</h5>
                        <p>補修案件</p>
                        <h5>私がやった事</h5>
                        <p>Storybook CSF2.0から3.0へのリファクタリングをしjestテストを入れました。</p>
                        <p>Typescriptを使ってはいるがstrictではなかったのでstrictに変換後600超えるエラー箇所を修正しました。</p>
                    </Project>
                    <Project>
                        <h4> 薬手帳サービスの施設向WEBアプリ開発</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-07"}>2022.07</time>
                            ~
                            <time dateTime={"2022-09"}>2022.09</time>
                        </span>
                        <h5>詳細</h5>
                        <p>薬手帳サービスのWebアプリケーション開発</p>
                        <h5>私がやった事</h5>
                        <p>主にページの実装を担当しました。Reactを用いてページの作り方やコンポーネントの作り方、Presenter-Containerパータンなどを学ぶことができました、またStoryBookも初めて経験しました。</p>
                        <li>Felicaカード管理ページ作成</li>
                        <li>スタッフアカウント管理ページ作成</li>
                        <li>QRコード生成ページ作成</li>
                        <li>施設情報ページ作成</li>
                        <li>証明書管理ページ作成</li>
                        <li>証明書ダウンロードページ作成</li>
                    </Project>
                </div>
            </div>
            <div className={"row"}>
                <div className={"row-left"}>
                    <RowLeftHeader>株式会社トマト<Period>。</Period></RowLeftHeader>
                    <span className={"role"}>PG</span>
                    <span className={"time"}>
                       <time dateTime={"2022-04"}>2022.04</time>
                       ~
                       <time dateTime={"2022-06"}>2022.06</time>
               </span>
                </div>
                <div className={"row-right"}>
                    <Project>
                        <h4>大手バス会社マイグレーション案件</h4>
                        <span className={"time"}>
                            <time dateTime={"2022-05"}>2022.05</time>
                            ~
                            <time dateTime={"2022-06"}>2022.06</time>
                        </span>
                        <h5>詳細</h5>
                        <p>旧環境から新環境へのマイグレーションをしております、システム改善はない見込みです。Javaや.NETのバージョンアップに対応します。</p>
                        <h5>私がやった事</h5>
                        <p>旧環境での結合テストを担当しております。</p>
                    </Project>
                </div>
            </div>

        </CareerContainer>
    );
}

export default Career;