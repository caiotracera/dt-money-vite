import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '@/assets/images/logo.svg';
import { NewTransactionModal } from '@/components/NewTransactionModal';

import * as S from '@/components/Header/styles';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton type="button">
              Nova transação
            </S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.Content>
    </S.Wrapper>
  );
}
