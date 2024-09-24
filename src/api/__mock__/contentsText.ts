export interface TextType {
  id?: number;
  code: string;
  description: string;
}

export const StructuralPseudoText: TextType[] = [
  {
    code: ':first-child',
    description: '첫번째 자식요소 선택',
  },
  {
    code: ':last-child',
    description: '마지막 자식요소 선택',
  },
  {
    code: ':nth-child(n)',
    description: 'n번째 자식요소 선택',
  },
  {
    code: ':nth-last-child(n)',
    description: '끝에서부터 n번째 자식요소 선택',
  },
  {
    code: ':first-of-type',
    description: `특정 요소가 형제 요소 중 첫번째로 나타나는 동일한 태그일 때`,
  },
  {
    code: ':last-of-type',
    description: `특정 요소가 형제 요소 중 마지막으로 나타나는 동일한 태그일 때`,
  },
  {
    code: ':nth-of-type(n)',
    description: `특정 요소가 형제 요소 중 n번째 나타나는 동일한 태그일 때`,
  },
  {
    code: ':nth-last-of-type(n)',
    description: `특정 요소가 형제 요소 중 끝에서 n번째 나타나는 동일한 태그일 때`,
  },
];

export const UserPseudoText: TextType[] = [
  {
    id: 1,
    code: ':hover',
    description: '커서를 갖다댔을때',
  },
  {
    id: 2,
    code: ':active',
    description: '요소가 활성화됐을때나 클릭했을 때',
  },
  {
    id: 3,
    code: ':focus',
    description: '키보드 포커스에 맞춰졌을 때',
  },
  {
    id: 3,
    code: ':visited',
    description: '방문 후',
  },
  {
    id: 3,
    code: ':link',
    description: '방문 전',
  },
];

export const AttributeSelectors: TextType[] = [
  {
    code: 'a[attr]',
    description: '이름의 특성을 가진 요소 선택',
  },
  {
    code: 'a[attr=value]',
    description: '정확히 value인 요소를 선택함',
  },
  {
    code: 'a[attr~=value]',
    description: '정확히 value인 요소를 선택함. attr 특성은 공백으로 구분한 여러 개의 값을 가지고 있을 수 있음.',
  },
  {
    code: 'a[attr|=value]',
    description: '정확히 value이거나 value로 시작하면서 곧바로 문자가 뒤에 따라오는 요소를 선택',
  },
  {
    code: 'a[attr^=value]',
    description: 'attr이라는 특성을 가지며, 접두사로 value가 포함되어 있으면 선택',
  },
  {
    code: 'a[attr$=value]',
    description: 'attr이라는 특성을 가지며, 접미사로 value가 포함되어 있으면 선택',
  },
  {
    code: 'a[attr*=value]',
    description: 'attr이라는 특성을 가지며, value라는 문자열이 적어도 하나 이상 존재하면 선택',
  },
  {
    code: 'a[attr operator value i]',
    description: 'i 혹은 I를 붙여주면 대소문자를 구분하지 않음',
  },
  {
    code: 'a[attr operator value s]',
    description: 's 혹은 S를 붙여주면 대소문자를 구분',
  },
];
