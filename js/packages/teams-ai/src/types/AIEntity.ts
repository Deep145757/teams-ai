/**
 * @module teams-ai
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ClientCitation } from './ClientCitation';

export interface AIEntity {
    /**
     * Required as 'https://schema.org/Message'
     */
    type: 'https://schema.org/Message';

    /**
     * Required as 'Message
     */
    '@type': 'Message';

    /**
     * Required as 'https://schema.org
     */
    '@context': 'https://schema.org';

    /**
     * Must be left blank. This is for Bot Framework schema.
     */
    '@id': '';

    /**
     * Indicate that the content was generated by AI.
     */
    additionalType: ['AIGeneratedContent'];

    /**
     * Optional; if citations object is included, the  sent activity will include the citations, referenced in the activity text.
     */
    citation?: ClientCitation[];
}
