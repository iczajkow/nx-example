/* eslint-disable-next-line */
export interface TitleProps {
  title: string;
}

export function Title(props: TitleProps = { title: 'QuickFrame' }) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Title;
