import styled from "styled-components";

const Contents = () => {
  return (
    <>
      <h2>About</h2>
      <p>
        プロダクトマネージャーをしております。株式会社SmartHRで、人材マネジメント領域のプロダクトを扱っています。
      </p>
      <h2>Favorite</h2>
      <ul>
        <li>音楽</li>
        <li>映画</li>
        <li>筋トレ</li>
        <li>英会話</li>
        <li>データ分析、統計</li>
        <li>プログラミング、個人開発</li>
      </ul>
      <h2>Links</h2>
      何らか書いたり発表したりしたものです。
      <ul>
        <li>
          <TextLink
            href="https://tech.smarthr.jp/entry/kpi-and-product-vision"
            target="_blank"
          >
            KPIを追いかけていたらプロダクトビジョンにたどり着いた話
          </TextLink>
        </li>
        <li>
          <TextLink
            href="https://tech.smarthr.jp/entry/long-hard-road-of-product-vision"
            target="_blank"
          >
            プロダクトビジョンを決め、活用するまでの長い道のり
          </TextLink>
        </li>
        <li>
          <TextLink href="https://schoo.jp/class/8011" target="_blank">
            データ活用の基礎をつくるKPI設計
          </TextLink>
        </li>

        <li>
          <TextLink
            href="https://speakerdeck.com/ryokaneoka0406/xi-hui-kontentu"
            target="_blank"
          >
            チームのコンテキスト理解を高める 朝会/夕会コンテンツ
          </TextLink>
        </li>
      </ul>
      <h2>Contact</h2>
      何かご相談があればTwitterのDMからどうぞ。
    </>
  );
};

export default Contents;

const TextLink = styled.a`
  text-decoration: underline;
  color: #3182ce;
`;
