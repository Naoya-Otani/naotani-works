import ActionButton from '@/components/atoms/ActionButton';

interface ProjectActionsProps {
  gradient: string;
}

export default function ProjectActions({ gradient }: ProjectActionsProps) {
  return (
    <div className="flex gap-4">
      <ActionButton
        variant="primary"
        className={`bg-gradient-to-r ${gradient}`}
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        }
      >
        Live Demo
      </ActionButton>
      <ActionButton
        variant="secondary"
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        }
      >
        Code
      </ActionButton>
    </div>
  );
}