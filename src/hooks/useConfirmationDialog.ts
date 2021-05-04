import React, { useCallback, useState } from 'react';
import ConfirmationDialog from 'components/global/ConfirmationDialog';

export default function useConfirmationDialog({
    headerText,
    bodyText,
    confirmationButtonText,
    onConfirmClick,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const Dialog = useCallback(
        () => (
            <ConfirmationDialog
                headerText={headerText}
                bodyText={bodyText}
                isOpen={isOpen}
                onConfirmClick={onConfirmClick}
                onCancelClick={() => setIsOpen(false)}
                confirmationButtonText={confirmationButtonText}
            />
        ),
        [isOpen]
    );

    return {
        Dialog,
        onOpen,
    };
}
view raw