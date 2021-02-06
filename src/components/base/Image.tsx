import * as React from 'react'
import styled from 'styled-components'

// Альтернативное решение потребует прокидование locator в image, а также самописной реализации логики обновления стилей
// styled-components занимает всего 12кб (gzip), что не должно быть большой нагрузкой по сравнению с размером реакта.
export default styled.div<React.HTMLProps<HTMLDivElement>>`
  background-image: url("${p => p.src}");
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background-size: ${p => p.width}px ${p => p.height}px;
`
