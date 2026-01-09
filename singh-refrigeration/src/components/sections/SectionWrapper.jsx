import * as S from './SectionWrapper.styles';

export default function SectionWrapper({ children, variant = 'default', className = '' }) {
  return (
    <S.SectionWrapper $variant={variant} className={className}>
      {children}
    </S.SectionWrapper>
  );
}
