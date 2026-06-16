export const getLinkClass = (baseClass: string, activeClass: string) =>
    ({ isActive }: { isActive: boolean }) => {
        return `${baseClass} ${isActive ? activeClass : ''}`;
    };