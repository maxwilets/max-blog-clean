/* eslint-disable import/no-unresolved */
import YearSpacerStyles from './styles';

export default function YearSpacer({ years }: { years: string }): any {
  return (
    <YearSpacerStyles>
      <p>{years}</p>
    </YearSpacerStyles>
  );
}
