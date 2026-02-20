import { Search, Plus, Trash2, ArrowRight, Download } from 'lucide-react';
import Button from '../components/commons/Button';

export default function ButtonTest() {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {/* Variant */}
      <section>
        <h3>Variant</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="subtle">Subtle</Button>
        </div>
      </section>

      {/* Outline */}
      <section>
        <h3>Outline</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button variant="primary" outline>
            Primary
          </Button>
          <Button variant="secondary" outline>
            Secondary
          </Button>
          <Button variant="accent" outline>
            Accent
          </Button>
          <Button variant="neutral" outline>
            Neutral
          </Button>
          <Button variant="danger" outline>
            Danger
          </Button>
          <Button variant="subtle" outline>
            Subtle
          </Button>
        </div>
      </section>

      {/* Ghost */}
      <section>
        <h3>Ghost</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button variant="primary" ghost>
            Primary
          </Button>
          <Button variant="secondary" ghost>
            Secondary
          </Button>
          <Button variant="accent" ghost>
            Accent
          </Button>
          <Button variant="neutral" ghost>
            Neutral
          </Button>
          <Button variant="danger" ghost>
            Danger
          </Button>
          <Button variant="subtle" ghost>
            Subtle
          </Button>
        </div>
      </section>

      {/* Size */}
      <section>
        <h3>Size</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Pill */}
      <section>
        <h3>Pill</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button pill>Primary</Button>
          <Button variant="secondary" pill>
            Secondary
          </Button>
          <Button variant="accent" outline pill>
            Outline
          </Button>
        </div>
      </section>

      {/* Icon */}
      <section>
        <h3>Icon</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button leftIcon={<Search size={16} />}>검색</Button>
          <Button variant="accent" rightIcon={<ArrowRight size={16} />}>
            다음
          </Button>
          <Button variant="secondary" leftIcon={<Download size={16} />}>
            다운로드
          </Button>
          <Button variant="danger" leftIcon={<Trash2 size={16} />}>
            삭제
          </Button>
          <Button variant="neutral" outline leftIcon={<Plus size={16} />}>
            추가
          </Button>
        </div>
      </section>

      {/* Loading */}
      <section>
        <h3>Loading</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button loading>저장 중...</Button>
          <Button variant="secondary" loading>
            불러오는 중...
          </Button>
          <Button variant="danger" outline loading>
            삭제 중...
          </Button>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h3>Disabled</h3>
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '0.75rem',
          }}
        >
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="accent" outline disabled>
            Outline
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h3>Full Width</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginTop: '0.75rem',
            maxWidth: '400px',
          }}
        >
          <Button fullWidth>Full Width Primary</Button>
          <Button variant="secondary" outline fullWidth>
            Full Width Outline
          </Button>
        </div>
      </section>
    </div>
  );
}
