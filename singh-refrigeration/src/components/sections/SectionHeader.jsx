import * as S from './SectionWrapper.styles';

export default function SectionHeader({ title, subtitle, description, align = 'left', dark = false }) {
  return (
    <S.SectionHeader $align={align}>
      {subtitle && <S.SectionSubtitle $dark={dark}>{subtitle}</S.SectionSubtitle>}
      <S.SectionTitle>{title}</S.SectionTitle>
      {description && <S.SectionDescription $dark={dark} $center={align === 'center'}>{description}</S.SectionDescription>}
    </S.SectionHeader>
  );
}
